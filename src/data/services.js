// Add a service by adding an object here. `icon` maps to src/components/common/ServiceIcon.jsx.
export const services = [
  {
    slug: 'business-website-development',
    title: 'Business Website Development',
    icon: 'briefcase',
    summary:
      'A clear, credible website that explains what you do and makes it easy for customers to reach you.',
    description:
      'A professional website built around your business: who you serve, what you offer and how people contact you. It is designed to load quickly and read well on phones, where many of your visitors will find you.',
    problems: [
      'Customers cannot find reliable information about your business online.',
      'You depend only on social media pages that you do not control.',
      'Prospects hesitate because they cannot check that you are a serious business.',
    ],
    features: [
      'Pages structured around your services',
      'Mobile-responsive layout',
      'Contact form and WhatsApp link',
      'Google Maps location',
      'Basic search engine setup',
    ],
    benefits: [
      'A professional first impression you control.',
      'One link to share with prospects, partners and on printed materials.',
      'A shorter path from interest to enquiry.',
    ],
    cta: 'Start your business website',
  },
  {
    slug: 'real-estate-website-development',
    title: 'Real Estate Website Development',
    icon: 'building',
    featured: true,
    summary:
      'Property websites with searchable listings, galleries and direct WhatsApp enquiries for agencies and developers.',
    description:
      'A property website that works as your digital showroom. Buyers and tenants can search listings by location, type and budget, view photos and details, and send an enquiry about a specific property, so your team knows exactly what each person wants.',
    problems: [
      'Listings are scattered across WhatsApp statuses, chats and social posts, and quickly get buried.',
      'Your team answers the same questions about price, location and availability again and again.',
      'Enquiries arrive without saying which property the person means.',
      'Diaspora and out-of-town buyers cannot browse your stock or judge your credibility remotely.',
      'Sold or rented properties keep attracting enquiries because old posts stay online.',
    ],
    features: [
      'Property listing catalogue and detail pages',
      'Search by location; filters for type, price, sale or rent',
      'Photo galleries for each property',
      'Enquiry forms and WhatsApp messages that name the property',
      'Availability status on every listing',
      'Admin dashboard for managing properties',
      'SEO foundations and analytics',
    ],
    benefits: [
      'Your stock is organised in one place that your agency owns.',
      'Better-informed enquiries, because visitors see key facts first.',
      'A credible destination for adverts, flyers and social media campaigns.',
      'Your team updates listings without waiting for a developer (with the admin dashboard).',
    ],
    cta: 'Discuss your property website',
    packageId: 'real-estate',
  },
  {
    slug: 'website-redesign',
    title: 'Website Redesign',
    icon: 'refresh',
    summary:
      'Turn an outdated or confusing website into a modern one that works properly on mobile.',
    description:
      'I review your current website, keep what works and rebuild what does not: layout, content structure, mobile experience and speed.',
    problems: [
      'The site looks dated and no longer reflects the quality of your business.',
      'It is hard to use on a phone.',
      'Visitors cannot quickly find your services or contact details.',
      'The site is slow or has broken pages.',
    ],
    features: [
      'Review of the existing site',
      'New layout and visual design',
      'Reorganised content and navigation',
      'Responsive rebuild',
      'Redirect planning to protect existing links',
    ],
    benefits: [
      'A website that matches your business as it is today.',
      'An easier experience for mobile visitors.',
      'A maintainable base for future updates.',
    ],
    cta: 'Request a redesign review',
  },
  {
    slug: 'landing-page-development',
    title: 'Landing Page Development',
    icon: 'rocket',
    summary:
      'A focused single page for a campaign, product, event or estate launch, built to drive one action.',
    description:
      'A landing page removes distractions and leads visitors to one next step: enquire, register, book or buy. It suits adverts, launches and limited-time offers.',
    problems: [
      'Advert traffic lands on a general page and leaves.',
      'A new offer or development has no dedicated place to explain it.',
      'You cannot tell which campaigns lead to enquiries.',
    ],
    features: [
      'Focused page structure and copy layout',
      'Strong calls to action',
      'Enquiry or registration form',
      'WhatsApp link',
      'Analytics setup where requested',
    ],
    benefits: [
      'A clear message that matches your advert.',
      'Fewer steps between interest and action.',
      'Campaign activity you can measure when analytics is included.',
    ],
    cta: 'Plan your landing page',
  },
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    icon: 'app',
    summary:
      'Custom web applications with accounts, dashboards and workflows for how your organisation operates.',
    description:
      'When a standard website is not enough, I build applications with user accounts, dashboards, records and business rules, using React on the front end and Python on the back end.',
    problems: [
      'Important processes run on spreadsheets and chat messages.',
      'Off-the-shelf software does not fit your workflow.',
      'Customers or staff need secure accounts to access information.',
    ],
    features: [
      'User accounts and role-based access',
      'Admin and user dashboards',
      'Database design',
      'Payment or third-party integrations, quoted per requirement',
      'Deployment and handover',
    ],
    benefits: [
      'Software shaped around your process.',
      'Records kept in one structured place.',
      'Room to add features as your needs grow.',
    ],
    cta: 'Describe your application idea',
  },
  {
    slug: 'backend-api-development',
    title: 'Backend API Development',
    icon: 'server',
    summary:
      'Secure, well-structured REST APIs in Django or FastAPI, backed by PostgreSQL.',
    description:
      'The server side of your product: data models, authentication, business logic and integrations, exposed through documented REST APIs for web or mobile clients.',
    problems: [
      'A mobile or web front end needs a reliable backend.',
      'Authentication and permissions need to be handled properly.',
      'Existing systems need to exchange data with other services.',
    ],
    features: [
      'REST API design and development',
      'Authentication and authorisation',
      'PostgreSQL data modelling and migrations',
      'Third-party integrations',
      'API documentation',
    ],
    benefits: [
      'A clear contract your front-end developers can build against.',
      'Business rules enforced in one place.',
      'A codebase that another developer can follow.',
    ],
    cta: 'Discuss your API',
  },
  {
    slug: 'website-deployment-cloud',
    title: 'Website Deployment and Cloud Infrastructure',
    icon: 'cloud',
    summary:
      'Deployment, containers and CI/CD pipelines so releases are repeatable and less risky.',
    description:
      'I set up where your application runs and how new versions reach it: cloud servers, containers, automated pipelines and HTTPS. The setup is sized to what your project actually needs.',
    problems: [
      'Releases are manual, stressful and easy to get wrong.',
      'The application works on a laptop but not reliably on a server.',
      'Nobody is sure how the infrastructure was set up.',
    ],
    features: [
      'AWS setup and domain configuration',
      'Docker containerisation; Kubernetes where justified',
      'Infrastructure as code with Terraform',
      'CI/CD with GitHub Actions and Argo CD',
      'HTTPS certificates and deployment documentation',
    ],
    benefits: [
      'Consistent, repeatable releases.',
      'Infrastructure that is written down, not memorised.',
      'A setup your team can maintain.',
    ],
    cta: 'Plan your deployment',
  },
  {
    slug: 'website-maintenance-support',
    title: 'Website Maintenance and Support',
    icon: 'wrench',
    summary:
      'Ongoing updates, fixes and content changes after your website goes live.',
    description:
      'Websites need attention after launch. Maintenance covers agreed content changes, dependency updates, fixes and checks. Scope and cost are agreed in a quotation.',
    problems: [
      'Content goes out of date.',
      'Small faults go unnoticed until a customer reports them.',
      'There is no one to call when something needs changing.',
    ],
    features: [
      'Agreed content updates',
      'Bug fixes',
      'Dependency and security updates',
      'Availability and form checks',
    ],
    benefits: [
      'A website that stays current.',
      'A known point of contact for changes.',
      'Problems addressed before they pile up.',
    ],
    cta: 'Ask about maintenance',
  },
];

export const getService = (slug) => services.find((service) => service.slug === slug);
