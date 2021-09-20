import about from './about';
import blog from './blog';
import home from './home';
import portfolio from './portfolio';

const pages = {
  name: 'pages',
  label: 'Pages',
  folder: 'content/pages',
  create: true,
  files: [home, about, blog, portfolio],
};

export default pages;
