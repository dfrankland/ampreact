import React from 'react';
import Head from 'next/head';
import { Amp } from 'react-amphtml';

export default () => (
  <div>
    <Head>
      <title>react-amphtml | Hello, World!</title>
    </Head>
    <h1>Hello, World!</h1>
    <Amp.Img
      src="/static/amp.jpg"
      width="1080"
      height="610"
      layout="responsive"
      alt="AMP"
    />
  </div>
);
