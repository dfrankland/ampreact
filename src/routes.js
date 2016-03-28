import React from 'react';
import App from './components/App';
import ContentPage from './components/ContentPage';
import NotFoundPage from './components/NotFoundPage';
import content from './content';

const getContextComponent = async (location, callback) => {
  const data = await content(location.pathname);
  callback(null, () => <ContentPage {...data} />);
};

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      getComponent: getContextComponent,
    },
    childRoutes: [
      {
        path: 'about',
        getComponent: getContextComponent,
      },
    ],
  }, {
    path: '*',
    component: NotFoundPage,
  },
];

export default routes;
