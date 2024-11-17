export type WorkHistoryItem = {
  id: number;
  name: string;
  details: string;
  logo: string;
};

export const projects: WorkHistoryItem[] = [
  {
    id: 1,
    name: 'Time tracker',
    details: 'https://lukarostan.github.io/time-tracker/',
    logo: '/react_logo.png',
  },
  {
    id: 2,
    name: 'Dropdown maker',
    details: 'https://lukarostan.github.io/Dropdown-Maker/',
    logo: '/react_logo.png',
  },
];
