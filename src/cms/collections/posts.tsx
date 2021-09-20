import seo from '../partials/seo';

const posts = {
  label: 'Posts',
  name: 'Posts',
  folder: 'content/blog',
  file: 'content/blog/index.md',
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

export default posts;
