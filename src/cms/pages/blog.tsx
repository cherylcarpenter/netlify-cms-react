import seo from '../partials/seo';

const blog = {
  file: 'content/pages/blog.md',
  label: 'Blog',
  name: 'Blog',
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

export default blog;
