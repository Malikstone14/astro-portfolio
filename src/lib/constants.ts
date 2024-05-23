import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/Malikstone14',
  linkedin: 'https://www.linkedin.com/in/malik-thalhaoui/',
  mail: 'mailto:Thalhaouim@gmail.com',

}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Expériences',
  DESCRIPTION: 'Expériences réalisées.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projets',
  DESCRIPTION: 'Récent projet sur lesquels j\'ai travaillé',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Recherche',
  DESCRIPTION: 'Rechercher un projet',
}

// Study Page
export const STUDIES = [
  {
    title: 'Concepteur développeur d\'application web',
    institution: 'My Digital School (Baccalauréat)',
    link: 'https://www.mydigitalschool.com/',
    date: '2022 - 2023',
  },
  {
    title: 'Développeur web et web mobile',
    institution: 'AFPA (DEC+2)',
    link: 'https://www.afpa.fr/',
    date: '2021 - 2022',
  },
  {
    title: 'Management des unités commerciales',
    institution: 'AFTEC (DEC +2)',
    link: 'https://www.aftec.com/',
    date: '2017 - 2019',
  }
]

export const EXPERIENCE = [
  {
    company: 'Dev&Stone',
    location: 'Caen-Montréal, France-Canada',
    position: 'Développeur Web Full-Stack Freelance',
    start: '2024',
    link: 'https://straico.com/',
    end: 'En cours',
    tasks: [
      'Création de site internet, création de features à integrer'
    ],
  },
  {
    company: 'TLT Performance',
    location: 'Ifs, France',
    position: 'Concepteur Développeur Web',
    start: '2022',
    end: '2023',
    tasks: [
      'Création, conception et refontes de site internet en Wordpress/PHP'
    ],
  },
  {
    company: 'Bayla Restaurant',
    link: 'https://imaginamos.com/',
    location: 'Caen, France',
    position: 'Concepteur Développeur Web',
    start: '2022',
    end: '2022',
    tasks: [
      'Réalisation d\'un site internet en Laravel/Bootstrap/JS pour un nouveau restaurant'
    ],
  }
]
