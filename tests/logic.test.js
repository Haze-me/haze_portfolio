import { describe, expect, it, vi, afterEach } from 'vitest';
import { properties, propertyTypes, locations } from '../src/data/demo/properties.js';
import { allPriceRanges, filterProperties } from '../src/utils/propertyFilters.js';
import { validateEnquiry, validatePropertyEnquiry } from '../src/utils/validation.js';
import { enquiryToText, submitEnquiry } from '../src/utils/enquiry.js';
import { isRealNumber, pickNumber, whatsappUrl } from '../src/utils/whatsapp.js';
import { site } from '../src/config/site.js';
import { isDemoHost, isMainHost, publicUrl } from '../src/utils/domains.js';
import { propertyMessage } from '../src/components/demo/demoContact.js';
import { prefillFromParams, budgets, projectTypes } from '../src/data/enquiryOptions.js';
import { packages } from '../src/data/pricing.js';
import { services } from '../src/data/services.js';
import { projects } from '../src/data/projects.js';

const valid = {
  fullName: 'Test Person', businessName: '', email: 'test@example.com', phone: '+234 800 000 0000',
  projectType: 'Website Redesign', budget: 'Not sure yet',
  description: 'We need a new website for our school.', contactMethod: 'Email',
};

afterEach(() => vi.unstubAllGlobals());

describe('property filtering', () => {
  const ids = (filters) => filterProperties(properties, filters).map((item) => item.id);

  it('returns everything with no filters', () => {
    expect(ids({})).toHaveLength(properties.length);
  });

  it('finds listings for every advertised location', () => {
    for (const location of locations) expect(ids({ location }).length, location).toBeGreaterThan(0);
  });

  it('matches part of a place name, any case', () => {
    const found = filterProperties(properties, { location: '  abuja ' });
    expect(found.length).toBeGreaterThan(0);
    expect(found.every((item) => item.city === 'Abuja')).toBe(true);
  });

  it('combines type, purpose and location', () => {
    const found = filterProperties(properties, { location: 'Lagos', type: 'Apartment', purpose: 'rent' });
    expect(found.length).toBeGreaterThan(0);
    for (const item of found) expect([item.state, item.type, item.purpose]).toEqual(['Lagos', 'Apartment', 'rent']);
  });

  it('puts every property in exactly one price band of its purpose', () => {
    for (const property of properties) {
      const bands = allPriceRanges.filter((range) => filterProperties([property], { price: range.id }).length);
      expect(bands, property.id).toHaveLength(1);
      expect(bands[0].id.startsWith(property.purpose)).toBe(true);
    }
  });

  it('puts a price on a shared edge in the lower band only', () => {
    const edge = [{ ...properties[0], price: 150e6 }];
    expect(filterProperties(edge, { price: 'sale-0-150' })).toHaveLength(1);
    expect(filterProperties(edge, { price: 'sale-150-300' })).toHaveLength(0);
  });

  it('sorts by price without changing the source list', () => {
    const before = properties.map((item) => item.id);
    const prices = filterProperties(properties, { sort: 'price-asc' }).map((item) => item.price);
    expect(prices).toEqual([...prices].sort((a, b) => a - b));
    expect(properties.map((item) => item.id)).toEqual(before);
  });

  it('has complete, unique property data', () => {
    expect(new Set(properties.map((item) => item.id)).size).toBe(properties.length);
    expect(propertyTypes.length).toBeGreaterThan(3);
    for (const item of properties) {
      for (const key of ['title', 'area', 'price', 'type', 'description', 'status']) expect(item[key]).toBeTruthy();
      expect(item.images.length).toBeGreaterThan(0);
      expect(item.images.every(Boolean)).toBe(true);
    }
  });
});

describe('form validation', () => {
  it('accepts a complete enquiry without a business name', () => {
    expect(validateEnquiry(valid)).toEqual({});
  });

  it('flags every required field when empty', () => {
    const empty = Object.fromEntries(Object.keys(valid).map((key) => [key, '']));
    expect(Object.keys(validateEnquiry(empty))).toEqual(
      ['fullName', 'email', 'phone', 'projectType', 'budget', 'description', 'contactMethod'],
    );
  });

  it('rejects bad email and phone values', () => {
    expect(validateEnquiry({ ...valid, email: 'a@b' }).email).toBeTruthy();
    expect(validateEnquiry({ ...valid, phone: 'call me 0800' }).phone).toBeTruthy();
    expect(validateEnquiry({ ...valid, phone: '12345' }).phone).toBeTruthy();
  });

  it('allows an empty email on property enquiries only', () => {
    expect(validatePropertyEnquiry({ fullName: 'Ada', phone: '08000000000', email: '', message: 'Please call me back.' })).toEqual({});
  });
});

describe('enquiries and WhatsApp', () => {
  it('does not claim delivery without an endpoint', async () => {
    const spy = vi.fn();
    vi.stubGlobal('fetch', spy);
    await expect(submitEnquiry(valid, '')).resolves.toEqual({ delivered: false });
    expect(spy).not.toHaveBeenCalled();
  });

  it('reports delivery only on a successful response', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: true }));
    await expect(submitEnquiry(valid, 'https://example.com/f')).resolves.toEqual({ delivered: true });
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 500 }));
    await expect(submitEnquiry(valid, 'https://example.com/f')).rejects.toThrow('500');
  });

  it('leaves out an empty business name', () => {
    expect(enquiryToText(valid)).not.toContain('Business:');
    expect(enquiryToText({ ...valid, businessName: 'Acme' })).toContain('Business: Acme');
  });

  it('builds WhatsApp links with an encoded message', () => {
    expect(whatsappUrl('Hi & bye', '+234 800-000')).toBe('https://wa.me/234800000?text=Hi%20%26%20bye');
    expect(whatsappUrl('Hi')).toBe('https://wa.me/?text=Hi');
  });

  it('never turns a placeholder into a phone number', () => {
    expect(isRealNumber('234XXXXXXXXXX')).toBe(false);
    expect(whatsappUrl('Hi', '234XXXXXXXXXX')).toBe('https://wa.me/?text=Hi');
    expect(pickNumber('234XXXXXXXXXX', '2340000000000')).toBe('2340000000000');
    expect(pickNumber('', '234XXXXXXXXXX')).toBe('');
  });

  it('has configurable numbers for the portfolio and the demo', () => {
    for (const key of ['whatsapp', 'demoWhatsapp']) expect(typeof site[key]).toBe('string');
  });

  it('names the selected property in its enquiry', () => {
    const message = propertyMessage(properties[0]);
    for (const part of [properties[0].title, properties[0].id, '₦235,000,000', 'demonstration']) {
      expect(message).toContain(part);
    }
  });
});

describe('domains', () => {
  it('tells the portfolio and demo addresses apart', () => {
    expect(isDemoHost('demo.hazetech.online')).toBe(true);
    expect(isDemoHost('hazetech.online')).toBe(false);
    expect(isMainHost('www.hazetech.online')).toBe(true);
    expect(isMainHost('demo.hazetech.online')).toBe(false);
    expect(isMainHost('localhost')).toBe(false);
  });

  it('gives each page its public address', () => {
    expect(publicUrl('/')).toBe('https://hazetech.online/');
    expect(publicUrl('/pricing')).toBe('https://hazetech.online/pricing');
    expect(publicUrl('/demo/primenest')).toBe('https://demo.hazetech.online/');
    expect(publicUrl('/demo/primenest/about')).toBe('https://demo.hazetech.online/about');
  });
});

describe('content integrity', () => {
  it('keeps the agreed package prices', () => {
    expect(packages.map((item) => item.price)).toEqual([200000, 350000, 650000]);
  });

  it('pre-fills the contact form with valid choices', () => {
    for (const query of [...packages.map((p) => `package=${p.id}`), ...services.map((s) => `service=${s.slug}`)]) {
      const result = prefillFromParams(new URLSearchParams(query));
      expect(projectTypes, query).toContain(result.projectType);
      if (result.budget) expect(budgets).toContain(result.budget);
    }
  });

  it('links projects only to services that exist', () => {
    const slugs = services.map((item) => item.slug);
    for (const project of projects) expect(slugs).toContain(project.relatedService);
  });
});
