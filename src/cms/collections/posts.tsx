import seo from '../partials/seo';

const posts = {
  file: 'content/pages/posts.md',
  label: 'Posts',
  name: 'Posts',
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
