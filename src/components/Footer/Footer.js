import React, { PropTypes } from 'react';
import s from './Footer.scss';

const Footer = (props, context) => {
  context.insertCss(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <span className={s.text}>Made with ⚡ by</span>
        <a className={s.link} href="https://github.com/dfrankland">@dfrankland</a>
      </div>
    </div>
  );
};

Footer.contextTypes = {
  insertCss: PropTypes.func.isRequired,
};

export default Footer;
