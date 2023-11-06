export interface Projects {
  name: string,
  image: string,
  description: string,
  urlGitHub: string,
  urlPreview: string,
  stack: string[]
}


export const projects: Projects[] = [
  
  {
    name: 'React Query Issues',
    image: '/react-query.svg',
    description: 'Curso de React Query, Fernando Herrera',
    urlGitHub: 'https://github.com/SoySergioGonza/react-query-issues',
    urlPreview: '',
    stack: ['React', 'TypeScript', 'React-Query'],
  },
  {
    name: 'jaume\'s portfolio',
    image: '/jaume.svg',
    description: 'Este es el portafolio de Jaume traído desde Leonidasesteban.com',
    urlGitHub: 'https://github.com/SoySergioGonza/portafolio-jaume',
    urlPreview: 'https://soysergiogonza.github.io/portafolio-jaume/',
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    name: 'elisa\'s portfolio',
    image: '/elisa.svg',
    description: 'Elisa Portfolio is a project that showcases my web development skills and knowledge. I used Flexbox CSS to create an attractive and responsive design.',
    urlGitHub: 'https://github.com/SoySergioGonza/portafolio-elisa',
    urlPreview: 'https://soysergiogonza.github.io/portafolio-elisa/',
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    name: 'Coronapp',
    image: '/coronapp.svg',
    description: 'Aplicación de Coronapp',
    urlGitHub: 'https://github.com/SoySergioGonza/Coronapp',
    urlPreview: 'https://soysergiogonza.github.io/Coronapp/',
    stack: ['HTML', 'CSS', 'JS'],
  },
  {
    name: 'HTML and CSS essential',
    image: '/html-css-essential.svg',
    description: 'Curso de HTML y CSS Esencial de LeonidasEsteban.com',
    urlGitHub: 'https://github.com/SoySergioGonza/html-and-essential-css',
    urlPreview: 'https://soysergiogonza.github.io/html-and-essential-css/',
    stack: ['HTML', 'CSS', 'JS'],
  },
];