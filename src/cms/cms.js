import CMS from 'netlify-cms-app';
import pages from './pages/index';
import posts from './collections/posts';
import { init } from 'netlify-cms-app';

window.CMS_MANUAL_INIT = true;
const { BRANCH } = process.env;

const config = {
  load_config_file: false,
  backend: {
    name: 'git-gateway',
    repo: 'https://github.com/cherylcarpenter/netlify-cms-react',
    branch: BRANCH || 'master',
    auth_type: 'github',
  },
  media_folder: '/static/img',
  public_folder: '/img',
  collections: [pages, posts],
};

init({ config });
