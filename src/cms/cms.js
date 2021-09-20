import CMS from 'netlify-cms-app';
import pages from './pages/index';
import posts from './collections/posts';
import { init } from 'netlify-cms-app';

window.CMS_MANUAL_INIT = true;
const { BRANCH } = process.env;

const config = {
  load_config_file: false,
  backend: {
    name: 'github',
    branch: BRANCH || 'master',
  },
  media_folder: '/static/img',
  public_folder: '/img',
  collections: [pages, posts],
};

init({ config });
