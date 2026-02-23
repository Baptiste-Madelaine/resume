import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Baptiste MADELAINE',
    photoBackEmoji: '💻',
    title: {
      fr: 'Développeur Full Stack Junior',
      en: 'Junior Full Stack Developer',
    },
    subtitle: {
      fr: 'BUT Informatique — Bac +3',
      en: 'Bachelor in Computer Science',
    },
    location: 'Fleury-Sur-Orne, France',
  },
  seo: {
    title: 'Baptiste Madelaine — Développeur Full Stack Junior',
    description: 'CV interactif de Baptiste Madelaine, développeur Full Stack Junior spécialisé en PHP, React et Node.js.',
  },
  languages: {
    default: 'fr',
    available: ['fr', 'en'],
    labels: { fr: 'FR', en: 'EN' },
  },
  contact: [
    { type: 'linkedin', label: 'Baptiste Madelaine', href: 'https://www.linkedin.com/in/baptiste-madelaine/' },
    { type: 'email', label: 'madelainebaptiste61@gmail.com' },
    { type: 'phone', label: '+33 6 09 65 82 83' },
    { type: 'github', label: 'Baptiste-Madelaine', href: 'https://github.com/Baptiste-Madelaine' },
    { type: 'location', label: 'Fleury-Sur-Orne, France' },
  ],
  skills: [
    {
      title: { fr: 'Langues', en: 'Languages' },
      type: 'languages',
      items: [
        { name: { fr: 'Français', en: 'French' }, level: { fr: 'Natif', en: 'Native' } },
        { name: { fr: 'Anglais', en: 'English' }, level: { fr: 'Professionnel', en: 'Professional' }, details: 'TOEIC 800' },
      ],
    },
    {
      title: { fr: 'Frontend', en: 'Frontend' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'JavaScript' },
        { name: 'HTML5' },
        { name: 'CSS3' },
      ],
    },
    {
      title: { fr: 'Backend', en: 'Backend' },
      type: 'badges',
      items: [
        { name: 'PHP' },
        { name: 'Laravel' },
        { name: 'Node.js' },
        { name: 'Java' },
      ],
    },
    {
      title: { fr: 'Bases de données', en: 'Databases' },
      type: 'badges',
      items: [
        { name: 'MySQL' },
        { name: 'PostgreSQL' },
        { name: 'SQL' },
      ],
    },
    {
      title: { fr: 'DevOps & Outils', en: 'DevOps & Tools' },
      type: 'badges',
      items: [
        { name: 'Git' },
        { name: 'Docker' },
        { name: 'Linux' },
        { name: 'CI/CD' },
      ],
    },
    {
      title: { fr: 'Méthodologies', en: 'Methodologies' },
      type: 'text',
      items: [
        { name: { fr: 'POO, API, Clean Code, Design Patterns, Tests unitaires, Agile/Scrum', en: 'OOP, API, Clean Code, Design Patterns, Unit Testing, Agile/Scrum' } },
      ],
    },
    {
      title: { fr: 'Qualités', en: 'Soft Skills' },
      type: 'text',
      items: [
        { name: { fr: 'Autonomie, Rigueur, Esprit d\'équipe, Adaptabilité, Résolution de problèmes', en: 'Autonomy, Rigor, Teamwork, Adaptability, Problem Solving' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'keolis',
      company: { fr: 'Keolis Pays Normands', en: 'Keolis Pays Normands' },
      role: { fr: 'Développeur Full Stack (Alternance)', en: 'Full Stack Developer (Apprenticeship)' },
      type: { fr: 'Alternance', en: 'Apprenticeship' },
      period: { fr: 'Mai 2024 - Septembre 2025', en: 'May 2024 - September 2025' },
      description: {
        fr: 'Participation au développement et à l\'amélioration d\'applications internes.',
        en: 'Participation in the development and improvement of internal applications.',
      },
      techs: ['PHP', 'Laravel', 'React', 'MySQL', 'Docker', 'Python'],
      isHighlighted: true,
      details: {
        context: {
          fr: 'Développement d\'un site web interne avec mise en production et gestion de l\'hébergement serveur.',
          en: 'Development of an internal web platform with production deployment and server management.',
        },
        tasks: {
          fr: [
            'Conception d\'un système de tickets pour le service informatique',
            'Développement de scripts Python pour automatiser la création de fiches horaires',
            'Optimisation des processus internes générant des gains de temps significatifs',
          ],
          en: [
            'Design of a ticketing system for the IT department',
            'Development of Python scripts to automate schedule generation',
            'Optimization of internal processes leading to significant time savings',
          ],
        },
        env: {
          fr: 'PHP / Laravel / React / MySQL / Docker / Linux',
          en: 'PHP / Laravel / React / MySQL / Docker / Linux',
        },
      },
    },
    {
      id: 'chronodrive',
      company: { fr: 'Chronodrive', en: 'Chronodrive' },
      role: { fr: 'Préparateur de commandes / Livreur', en: 'Order Picker / Delivery Driver' },
      type: { fr: 'CDD', en: 'Fixed-term contract' },
      period: { fr: 'Septembre 2023 - Décembre 2023', en: 'September 2023 - December 2023' },
      description: {
        fr: 'Préparation et livraison des commandes clients avec gestion des priorités.',
        en: 'Preparation and delivery of customer orders with priority management.',
      },
      techs: [],
    },
    {
      id: 'brittany',
      company: { fr: 'Brittany-Ferries', en: 'Brittany Ferries' },
      role: { fr: 'Inventaire du parc informatique', en: 'IT Asset Inventory Technician' },
      type: { fr: 'Mission', en: 'Assignment' },
      period: { fr: 'Juillet 2023 - Août 2023', en: 'July 2023 - August 2023' },
      description: {
        fr: 'Réalisation d\'un inventaire complet des équipements informatiques pour la DSI.',
        en: 'Conducted a complete IT equipment inventory for the IT department.',
      },
      techs: ['Linux'],
    },
  ],
  education: [
    {
      school: { fr: 'Université Caen Normandie', en: 'University of Caen Normandy' },
      degree: { fr: 'BUT Informatique', en: 'Bachelor in Computer Science' },
      specialty: { fr: 'Développement d\'applications web', en: 'Web Application Development' },
      period: '2022 - 2025',
    },
    {
      school: { fr: 'Université Caen Normandie', en: 'University of Caen Normandy' },
      degree: { fr: 'DUT Réseaux et Télécommunications', en: 'Technical Degree in Networks & Telecommunications' },
      period: '2018 - 2020',
    },
  ],
  projects: [],
  hobbies: [],
  theme: { preset: 'ocean' },
  labels: {
    sections: {
      contact: { fr: 'CONTACT', en: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES', en: 'SKILLS' },
      experience: { fr: 'EXPÉRIENCES PROFESSIONNELLES', en: 'PROFESSIONAL EXPERIENCE' },
      education: { fr: 'FORMATION', en: 'EDUCATION' },
      projects: { fr: 'PROJETS', en: 'PROJECTS' },
      hobbies: { fr: 'LOISIRS', en: 'HOBBIES' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :', en: 'Main responsibilities:' },
      moreTasks: { fr: 'autres missions...', en: 'more tasks...' },
      training: { fr: 'Formations :', en: 'Training:' },
      techEnv: { fr: 'Env. technique :', en: 'Tech environment:' },
      technologies: { fr: 'Technologies', en: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir plus de détails', en: 'Click on experiences to see more details' },
      switchTheme: { fr: 'Changer le thème', en: 'Switch theme' },
      downloadPdf: { fr: 'Télécharger le PDF', en: 'Download PDF' },
    },
  },
}
