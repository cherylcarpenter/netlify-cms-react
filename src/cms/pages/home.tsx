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
      default: 'Home',
      required: false,
    },
    { label: 'Publish Date', name: 'publishedDate', widget: 'datetime' },
    { label: 'Description', name: 'description', widget: 'text' },
    seo,
  ],
};

export default home;
