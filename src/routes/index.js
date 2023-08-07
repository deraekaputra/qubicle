/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    {
      path: '/signup-step1',
      load: () =>
        import(/* webpackChunkName: 'signup-step1' */ './signup-step1'),
    },
    {
      path: '/signup-step2',
      load: () =>
        import(/* webpackChunkName: 'signup-step2' */ './signup-step2'),
    },
    {
      path: '/signin',
      load: () => import(/* webpackChunkName: 'signin' */ './signin'),
    },
    {
      path: '/forgot-password',
      load: () =>
        import(/* webpackChunkName: 'forgot-password' */ './forgot-password'),
    },
    {
      path: '/reset-password',
      load: () =>
        import(/* webpackChunkName: 'reset-password' */ './reset-password'),
    },
    {
      path: '/interest',
      load: () => import(/* webpackChunkName: 'interest' */ './interest'),
    },
    {
      path: '/others',
      load: () => import(/* webpackChunkName: 'others' */ './others'),
    },
    {
      path: '/story',
      load: () => import(/* webpackChunkName: 'story' */ './story'),
    },
    {
      path: '/tag',
      load: () => import(/* webpackChunkName: 'tag' */ './tag'),
    },
    {
      path: '/search-results',
      load: () =>
        import(/* webpackChunkName: 'search-results' */ './search-results'),
    },
    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/contact-us',
      load: () => import(/* webpackChunkName: 'contact-us' */ './contact-us'),
    },
    {
      path: '/terms-of-use',
      load: () =>
        import(/* webpackChunkName: 'terms-of-use' */ './terms-of-use'),
    },
    {
      path: '/privacy-policy',
      load: () =>
        import(/* webpackChunkName: 'privacy-policy' */ './privacy-policy'),
    },

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
