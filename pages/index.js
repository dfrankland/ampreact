import React from 'react';
import Head from 'next/head';
import { Amp } from 'react-amphtml';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default () => (
  <Container>
    <Head>
      <title>react-amphtml | Hello, World!</title>
    </Head>
    <h1>Hello, World!</h1>
    <Amp.Carousel
      height="610"
      layout="fixed-height"
      type="carousel"
    >
      <Amp.Img
        src="/static/amp.jpg"
        width="1080"
        height="610"
        alt="AMP"
      />
      <Amp.Img
        src="/static/amp.jpg"
        width="1080"
        height="610"
        alt="AMP"
      />
      <Amp.Img
        src="/static/amp.jpg"
        width="1080"
        height="610"
        alt="AMP"
      />
    </Amp.Carousel>
  </Container>
);
