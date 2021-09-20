import seo from '../partials/seo';

const home = {
  file: 'content/pages/home.md',
  label: 'Home',
  name: 'Home',
  fields: [
    {
      label: 'Layout',
      name: 'layout',
      widget: 'hidden',
      default: 'contact',
    },
    {
      label: 'Type',
      name: 'type',
      widget: 'hidden',
      default: 'page',
    },
    {
      label: 'Title',
      name: 'title',
      widget: 'string',
      default: '',
      required: false,
    },
    seo,
  ],
};

export default home;
