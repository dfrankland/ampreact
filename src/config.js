export const port = process.env.PORT || 3000;
export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
export const protocol = process.env.HTTP ? 'http' : 'https';
export const proxyProtocol = process.env.HTTP_PROXY ? 'http' : 'https';

export const analytics = {

  // Default Google Analytics
  // https://developers.google.com/analytics/devguides/collection/amp-analytics/
  google: {
    vars: {
      account: process.env.GOOGLE_TRACKING_ID || 'UA-XXXXX-X',
    },
    triggers: {
      trackPageview: {
        on: 'visible',
        request: 'pageview',
      },
    },
  },
};

// Default Markup Specifications
// https://developers.google.com/structured-data/carousels/top-stories#markup_specification
export const defaultMarkup = {
  '@context': 'http://schema.org',
  '@type': 'BlogPosting',
  mainEntityOfPage: {
    '@type': 'WebPage',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ampreact',
    logo: {
      '@type': 'ImageObject',
      url: `${proxyProtocol}://${host}/tile-wide.png`,
      width: 587,
      height: 270,
    },
  },
  image: {
    '@type': 'ImageObject',
    url: `${proxyProtocol}://${host}/apple-touch-icon.png`,
    width: 180,
    height: 180,
  },
  author: {
    '@type': 'Person',
    name: 'ampreact',
  },
};
