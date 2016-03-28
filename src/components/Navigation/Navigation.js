import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Navigation.scss';

const Navigation = (props, context) => {
  context.insertCss(s);
  return (
    <div className={cx(s.root, props.className)} role="navigation">
      <a className={s.link} href="/">home</a>
      <a className={s.link} href="/about">about</a>
      <span className={s.spacer}> | </span>
      <a className={s.link} href="https://github.com/dfrankland/ampreact">github</a>
      <a className={cx(s.link, s.highlight)} href="#development=1">debug</a>
    </div>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

Navigation.contextTypes = {
  insertCss: PropTypes.func.isRequired,
};

export default Navigation;
