import React, { PropTypes } from 'react';
import s from './ContentPage.scss';

const ContentPage = (props, context) => {
  const { insertCss, setTitle, setDescription, setMarkup } = context;
  const {
    title,
    description,
    headline,
    datePublished,
    dateModified,
    image,
    author,
  } = props;
  insertCss(s);
  if (title) setTitle(title);
  if (description) setDescription(description);
  if (headline) setMarkup.headline(headline);
  if (datePublished) setMarkup.datePublished(datePublished);
  if (dateModified) setMarkup.dateModified(dateModified);
  if (image) setMarkup.image(...image);
  if (author) setMarkup.author(author);
  return (
    <div className={s.root}>
      <div className={s.container}>
        {props.path === '/' ? null : <h1>{props.title}</h1>}
        <div dangerouslySetInnerHTML={{ __html: props.content || '' }} />
      </div>
    </div>
  );
};

ContentPage.propTypes = {
  path: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  headline: PropTypes.string,
  datePublished: PropTypes.string,
  dateModified: PropTypes.string,
  image: PropTypes.object,
  author: PropTypes.string,
};

ContentPage.contextTypes = {
  setTitle: PropTypes.func.isRequired,
  insertCss: PropTypes.func.isRequired,
};

export default ContentPage;
