const CONFIG = {
github: {
username: 'rahul656676',
},

base: '/',

projects: {
github: {
display: true,
header: 'GitHub Projects',
mode: 'automatic',

  automatic: {
    sortBy: 'updated',
    limit: 6,

    exclude: {
      forks: false,
      projects: [],
    },
  },

  manual: {
    projects: [],
  },
},

external: {
  header: 'Featured Projects',

  projects: [
    {
      title: 'AI Audio Conversational Chatbot',

      description:
        'Real-time conversational AI chatbot using Python, NLP, Speech-to-Text, and AWS cloud deployment.',

      imageUrl:
        'https://img.freepik.com/free-vector/chatbot-concept-illustration_114360-5522.jpg',

      link: 'https://github.com/rahul656676',
    },

    {
      title: 'Intelligent AI Travel Agent',

      description:
        'AI-powered travel assistant with booking recommendations and AWS integration.',

      imageUrl:
        'https://img.freepik.com/free-vector/travel-booking-app-concept_23-2148652956.jpg',

      link: 'https://github.com/rahul656676',
    },
  ],
},
},

seo: {
title: 'Rahul Jangir Portfolio',
description: 'AI/ML Developer Portfolio',
imageURL: '',
},

social: {
linkedin: 'rahul-jangir-929a65305',

x: '',

mastodon: '',

researchGate: '',

facebook: '',

instagram: '',

reddit: '',

threads: '',

youtube: '',

udemy: '',

dribbble: '',

behance: '',

medium: '',

dev: '',

stackoverflow: '',

discord: '',

telegram: '',

website: '',

phone: '',

email: 'rahul656676@gmail.com',

},

resume: {
fileUrl: '/resume.pdf',
},

skills: [
'Python',
'Machine Learning',
'Generative AI',
'AWS',
'NLP',
'Speech-to-Text',
'Linux',
'Git',
'GitHub',
'Scikit-learn',
'Pandas',
'NumPy',
],

experiences: [
{
company: 'REGex Software Services',

  position: 'AI / ML Intern',

  from: 'June 2025',

  to: 'July 2025',

  companyLink: '',
},

],

certifications: [],

educations: [
{
institution:
'B.K. Birla Institute of Engineering and Technology, Pilani',

  degree: 'B.Tech - Artificial Intelligence',

  from: '2023',

  to: '2027',
},

],

publications: [],

blog: {
source: 'dev',

username: '',

limit: 2,

},

googleAnalytics: {
id: '',
},

hotjar: {
id: '',

snippetVersion: 6,

},

themeConfig: {
defaultTheme: 'nord',

disableSwitch: false,

respectPrefersColorScheme: false,

displayAvatarRing: true,

themes: [
  'light',
  'dark',
  'corporate',
  'forest',
  'nord',
  'sunset',
  'night',
],

},

footer: 'Built with ❤️ by Rahul Jangir',

enablePWA: true,
};

export default CONFIG;