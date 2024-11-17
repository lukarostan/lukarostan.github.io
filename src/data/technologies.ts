export type WorkHistoryItem = {
  id: number;
  name: string;
  details: string;
  logo: string;
};

export const technologies: WorkHistoryItem[] = [
  {
    id: 1,
    name: 'React',
    details: 'details',
    logo: '/react_logo.png',
  },
  {
    id: 2,
    name: 'Vue.js',
    details: 'details',
    logo: '/vue_logo.png',
  },
  {
    id: 3,
    name: 'Wordpress',
    details: 'details',
    logo: '/wordpress_logo.png',
  },
  {
    id: 4,
    name: 'Docker',
    details: 'details',
    logo: '/docker_logo.png',
  },
];
