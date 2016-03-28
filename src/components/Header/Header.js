import React, { PropTypes } from 'react';
import s from './Header.scss';
import Navigation from '../Navigation';

const Header = (props, context) => {
  context.insertCss(s);
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Navigation className={s.nav} />
        <a className={s.brand} href="/">
          ⚡⚛
          <span className={s.brandTxt}>ampreact</span>
        </a>
        <div className={s.banner}>
          <h1 className={s.bannerTitle}>amp + react</h1>
          <p className={s.bannerDesc}>
             ampreact &mdash; the most trendy website boilerplate possible.
          </p>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  getAmpHtml: PropTypes.func.isRequired,
};

Header.contextTypes = {
  insertCss: PropTypes.func.isRequired,
};

export default Header;
