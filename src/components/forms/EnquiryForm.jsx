import { useEffect, useRef, useState } from 'react';
import { CircleCheck, Mail, MessageCircle, Send } from 'lucide-react';
import { site } from '../../config/site.js';
import { budgets, contactMethods, projectTypes } from '../../data/enquiryOptions.js';
import { useForm } from '../../hooks/useForm.js';
import { enquiryToText, submitEnquiry } from '../../utils/enquiry.js';
import { DESCRIPTION_MAX, validateEnquiry } from '../../utils/validation.js';
import { whatsappUrl } from '../../utils/whatsapp.js';
import Button from '../ui/Button.jsx';
import CopyButton from '../ui/CopyButton.jsx';
import FormField from './FormField.jsx';

const blank = {
  fullName: '', businessName: '', email: '', phone: '',
  projectType: '', budget: '', description: '', contactMethod: '',
};

const mailtoLink = (text) =>
  `mailto:${site.email}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(text)}`;

/** The two ways to reach HazeTech directly, with the message filled in. */
function SendOptions({ text, emailLabel = 'Send by email', whatsappLabel = 'Send via WhatsApp' }) {
  return (
    <>
      <Button variant="dark" href={mailtoLink(text)}>
        <Mail className="size-4" aria-hidden="true" /> {emailLabel}
      </Button>
      <Button variant="whatsapp" href={whatsappUrl(text, site.whatsapp)}>
        <MessageCircle className="size-4" aria-hidden="true" /> {whatsappLabel}
      </Button>
    </>
  );
}

/** Shown after a valid submission. Says exactly what did and did not happen. */
function Result({ status, text, onEdit, onReset }) {
  const ref = useRef(null);
  useEffect(() => ref.current?.focus(), []);

  return (
    <div ref={ref} tabIndex={-1} role="status" className="outline-none">
      {status === 'delivered' ? (
        <>
          <CircleCheck className="size-10 text-green-700" aria-hidden="true" />
          <h2 className="mt-3 text-2xl font-bold text-navy-900">Enquiry sent</h2>
          <p className="mt-2 text-muted">
            Thank you. Your enquiry was submitted to HazeTech. We will reply using your preferred contact
            method. You can also follow up directly:
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <SendOptions text={text} emailLabel="Email us" whatsappLabel="Message us on WhatsApp" />
          </div>
          <Button variant="outline" onClick={onReset} className="mt-6">Send another enquiry</Button>
        </>
      ) : (
        <>
          <Send className="size-10 text-accent-600" aria-hidden="true" />
          <h2 className="mt-3 text-2xl font-bold text-navy-900">One last step: send your enquiry</h2>
          <p className="mt-2 text-muted">
            Your message is ready. Choose email or WhatsApp, then press send in the app that opens.
          </p>
          <pre className="mt-5 max-h-72 overflow-auto rounded-xl bg-mist p-4 font-sans text-sm whitespace-pre-wrap">{text}</pre>
          <div className="mt-5 flex flex-wrap gap-3">
            <SendOptions text={text} />
            <CopyButton text={text} />
            <Button variant="outline" onClick={onEdit}>Edit details</Button>
          </div>
          <p className="mt-4 text-sm text-muted">
            If no email app opens, copy the message and send it to <strong className="break-all">{site.email}</strong>.
          </p>
        </>
      )}
    </div>
  );
}

export default function EnquiryForm({ prefill }) {
  const initial = {
    ...blank,
    projectType: prefill.projectType,
    budget: prefill.budget,
    description: prefill.description,
  };
  const { values, errors, onChange, check, reset } = useForm(initial, validateEnquiry);
  const [status, setStatus] = useState('editing');
  const sending = status === 'sending';
  const errorCount = Object.keys(errors).length;

  async function onSubmit(event) {
    event.preventDefault();
    if (sending || !check(event.currentTarget)) return;
    // Hidden field that people never see; bots tend to fill it.
    if (event.currentTarget.elements.namedItem('company_website').value) return;
    setStatus('sending');
    try {
      const { delivered } = await submitEnquiry(values);
      setStatus(delivered ? 'delivered' : 'prepared');
    } catch {
      setStatus('failed');
    }
  }

  if (status === 'delivered' || status === 'prepared') {
    return (
      <Result
        status={status}
        text={enquiryToText(values)}
        onEdit={() => setStatus('editing')}
        onReset={() => {
          reset();
          setStatus('editing');
        }}
      />
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <FormField id="fullName" label="Full name" error={errors.fullName}>
        {(props) => <input {...props} value={values.fullName} onChange={onChange} autoComplete="name" maxLength={100} />}
      </FormField>
      <FormField id="businessName" label="Business name" optional>
        {(props) => <input {...props} value={values.businessName} onChange={onChange} autoComplete="organization" maxLength={120} />}
      </FormField>
      <FormField id="email" label="Email address" error={errors.email}>
        {(props) => <input {...props} type="email" value={values.email} onChange={onChange} autoComplete="email" maxLength={160} />}
      </FormField>
      <FormField id="phone" label="Phone number" error={errors.phone} hint="Include your country code if outside Nigeria.">
        {(props) => <input {...props} type="tel" value={values.phone} onChange={onChange} autoComplete="tel" maxLength={25} />}
      </FormField>
      <FormField id="projectType" label="Type of project" error={errors.projectType}>
        {(props) => (
          <select {...props} value={values.projectType} onChange={onChange}>
            <option value="">Select a project type</option>
            {projectTypes.map((item) => <option key={item}>{item}</option>)}
          </select>
        )}
      </FormField>
      <FormField id="budget" label="Estimated budget" error={errors.budget}>
        {(props) => (
          <select {...props} value={values.budget} onChange={onChange}>
            <option value="">Select a budget range</option>
            {budgets.map((item) => <option key={item}>{item}</option>)}
          </select>
        )}
      </FormField>
      <FormField
        id="description"
        label="Project description"
        error={errors.description}
        hint={`What does your business do, and what do you need? ${values.description.length}/${DESCRIPTION_MAX}`}
        className="sm:col-span-2"
      >
        {(props) => <textarea {...props} rows={6} value={values.description} onChange={onChange} maxLength={DESCRIPTION_MAX} />}
      </FormField>

      <fieldset className="sm:col-span-2" aria-describedby={errors.contactMethod ? 'contactMethod-error' : undefined}>
        <legend className="mb-2 text-sm font-semibold text-navy-900">Preferred contact method</legend>
        <div className="flex flex-wrap gap-3">
          {contactMethods.map((method) => (
            <label key={method} className="flex min-h-12 cursor-pointer items-center gap-2.5 rounded-xl border border-slate-300 px-4 has-checked:border-accent-600 has-checked:bg-accent-50">
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={values.contactMethod === method}
                onChange={onChange}
                className="size-4 accent-accent-600"
              />
              {method}
            </label>
          ))}
        </div>
        {errors.contactMethod && (
          <p id="contactMethod-error" className="mt-1.5 text-sm font-medium text-red-700">{errors.contactMethod}</p>
        )}
      </fieldset>

      <div className="hidden" aria-hidden="true">
        <label>
          Leave empty
          <input name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2">
        {errorCount > 0 && (
          <p role="alert" className="mb-4 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-800">
            Please correct {errorCount === 1 ? '1 field' : `${errorCount} fields`} above.
          </p>
        )}
        {status === 'failed' && (
          <div role="alert" className="mb-4 rounded-xl bg-red-50 p-4 text-sm text-red-800">
            <p className="font-semibold">Your enquiry could not be sent. Your details are still here.</p>
            <p>Try again, or send it by email or WhatsApp instead.</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <SendOptions text={enquiryToText(values)} />
            </div>
          </div>
        )}
        <Button type="submit" size="lg" disabled={sending} className="w-full sm:w-auto">
          {sending ? 'Sending…' : site.formEndpoint ? 'Send enquiry' : 'Continue to send'}
          <Send className="size-4" aria-hidden="true" />
        </Button>
        <p className="mt-3 text-sm text-muted">
          {site.formEndpoint
            ? 'Your details are sent to HazeTech through Formspree, a form delivery service, so we can respond to your enquiry.'
            : 'Next, you choose to send your message by email or WhatsApp.'}
        </p>
      </div>
    </form>
  );
}
