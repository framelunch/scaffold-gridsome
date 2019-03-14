// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/styles/_global.css';

import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  head.script.push({ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' });

  if (isClient && window.netlifyIdentity) {
    window.netlifyIdentity.on('init', user => {
      if (!user) {
        // eslint-disable-next-line no-return-assign
        window.netlifyIdentity.on('login', () => (document.location.href = '/admin/'));
      }
    });
  }
}
