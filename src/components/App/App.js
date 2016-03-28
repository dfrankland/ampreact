import React, { PropTypes } from 'react';
import s from './App.scss';
import Header from '../Header';
import Footer from '../Footer';

const App = (props, context) => {
  context.insertCss(s);
  return !props.error ? (
    <div className={s.root}>
      <Header getAmpHtml={context.getAmpHtml} />
      {props.children}
      <Footer />
    </div>
  ) : props.children;
};

App.propTypes = {
  children: PropTypes.element.isRequired,
  error: PropTypes.object,
};

App.contextTypes = {
  insertCss: PropTypes.func.isRequired,
  getAmpHtml: PropTypes.func.isRequired,
};

export default App;
