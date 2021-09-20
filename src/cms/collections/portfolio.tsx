import seo from '../partials/seo';

const portfolio = {
  label: 'Portfolio',
  name: 'Portfolio',
  folder: 'content/portfoio',
  file: 'content/portfolio/index.md',
  create: true,
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

export default portfolio;
