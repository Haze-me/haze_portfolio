// To add a project, copy one object and change it.
//  image: put a screenshot in /public/projects/ and set e.g. '/projects/name.png'
//         (about 16:10; '' shows a placeholder)
//  badge: optional label, e.g. to mark a concept that is not a client project
//  notes: sections shown under the Overview: [{ heading: 'My role: ...', body: '...' }]
//  liveUrl: optional; adds a "View live demo" link. Only use an address that works.
//  Order matters: the home page shows the first three.
export const projects = [
  {
    slug: 'event-giveaway-app',
    name: 'Event Giveaway App',
    subtitle: 'Quiz Giveaway Platform for Events',
    category: 'Web application',
    description:
      'A digital celebration and event platform that allows users to create events and organise digital giveaways.',
    technologies: ['React', 'Django', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    image: '/projects/event-giveaway-app.png',
    notes: [
      {
        heading: 'My role: Full-Stack and DevOps Engineer',
        body: 'I delivered this project from end to end: building the user interface in React, developing the backend and database with Django and PostgreSQL, and handling containerisation, cloud deployment and release automation.',
      },
    ],
    relatedService: 'web-application-development',
  },
  {
    slug: 'deckymart',
    name: 'DeckyMart',
    subtitle: 'Service Marketplace Platform',
    category: 'Marketplace platform',
    description:
      'A marketplace platform where car owners describe a problem in their own words and are matched with a verified, nearby repair provider.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'JWT'],
    image: '/projects/deckymart.png',
    notes: [
      {
        heading: 'My role: Backend and DevOps Engineer',
        body: 'In a team of three developers, I was responsible for the entire backend, built with FastAPI, and handled deployment as the DevOps engineer.',
      },
    ],
    relatedService: 'backend-api-development',
  },
  {
    slug: 'apex-engineering',
    name: 'Apex Engineering & Construction',
    subtitle: 'Civil Engineering Website',
    category: 'Concept project',
    badge: 'Demo concept · not a real client',
    description:
      'A concept website for a civil engineering and construction company in Nigeria and West Africa, presenting its services, projects and approach, with a clear way to request a consultation.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'React Router'],
    image: '/projects/apex-engineering.png',
    liveUrl: 'https://civil.hazetech.online',
    notes: [
      {
        heading: 'My role: Frontend Developer',
        body: 'I built this concept website with React, Vite and Tailwind CSS, with responsive, separate pages that present the company and guide visitors to request a consultation.',
      },
    ],
    relatedService: 'business-website-development',
  },
  {
    slug: 'brightpath-tutors',
    name: 'BrightPath Tutors',
    subtitle: 'Tutoring Website',
    category: 'Concept project',
    badge: 'Demo concept · not a real client',
    description:
      'A concept website for a tutoring business offering one-to-one lessons online and in person, designed for students in Nigeria and international families.',
    technologies: ['Python', 'Django', 'React', 'Vite', 'Tailwind CSS'],
    image: '/projects/brightpath-tutors.png',
    notes: [
      {
        heading: 'My role: Full-Stack and DevOps Engineer',
        body: 'I handled the full-stack and DevOps work on this concept, building the frontend with React, Vite and Tailwind CSS and the backend with Python and Django.',
      },
    ],
    relatedService: 'business-website-development',
  },
];

export const demoProject = {
  slug: 'primenest-properties',
  name: 'PrimeNest Properties',
  subtitle: 'Real Estate Website Demo',
  description:
    'An interactive property website for a fictional agency: searchable listings, filters, photo galleries and WhatsApp enquiries.',
  technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
};

export const getProject = (slug) => projects.find((project) => project.slug === slug);
