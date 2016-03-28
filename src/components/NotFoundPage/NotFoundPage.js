import React, { PropTypes } from 'react';
import s from './NotFoundPage.scss';

const title = 'Page Not Found ⁉️';

const NotFoundPage = (props, context) => {
  const { insertCss, setTitle, set404 } = context;
  insertCss(s);
  setTitle(title);
  set404();
  return (
    <div>
      <h1>Page Not Found ⁉️</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </div>
  );
};

NotFoundPage.contextTypes = {
  setTitle: PropTypes.func.isRequired,
  set404: PropTypes.func.isRequired,
  insertCss: PropTypes.func.isRequired,
};

export default NotFoundPage;
