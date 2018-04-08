import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import * as Amp from 'react-amphtml';
import * as AmpHelpers from 'react-amphtml/helpers';

const Container = styled.div`
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1rem;
`;

const StyledAmpImg = styled(Amp.AmpImg)`
  filter: ${(props) => {
    switch (props['data-filter']) {
      case 1:
        return 'blur(10px)';
      case 2:
        return 'hue-rotate(180deg)';
      case 3:
        return 'invert(100%)';
      case 4:
        return 'grayscale(100%)';
      case 5:
        return 'sepia(100%)';
      case 6:
        return 'saturate(100%)';
      default:
        return 'none';
    }
  }};
`;

const RelativeAmpList = styled(Amp.AmpList)`
  position: relative;
  min-height: 2rem;
`;

const defaultHeading = {
  text: 'Hello, World!',
};

export default () => (
  <Container>
    <Head>
      <title>ampreact | Hello, World!</title>
    </Head>

    <Amp.AmpState specName="amp-state" id="heading">
      {defaultHeading}
    </Amp.AmpState>
    <AmpHelpers.Bind text="heading.text">
      {props => <h1 {...props}>{defaultHeading.text}</h1>}
    </AmpHelpers.Bind>

    <p>
      <label htmlFor="headingInputElement">
        <p><b>Type your heading:</b></p>
        <Amp.AmpState specName="amp-state" id="headingInput">
          {defaultHeading}
        </Amp.AmpState>
        <AmpHelpers.Action
          events={{
            change: ['AMP.setState({ headingInput: { text: event.value } })'],
          }}
        >
          {props => <input {...props} type="text" id="headingInputElement" />}
        </AmpHelpers.Action>
      </label>
      <AmpHelpers.Action
        events={{
          tap: ['AMP.setState({ heading: { text: headingInput.text } })'],
        }}
      >
        {props => <button {...props}>Set Heading</button>}
      </AmpHelpers.Action>
    </p>

    <p>
      <AmpHelpers.Action
        events={{
          tap: ['awesome-carousel.toggleVisibility'],
        }}
      >
        {props => <button {...props}>Toggle Carousel Visibility</button>}
      </AmpHelpers.Action>
    </p>

    <Amp.AmpCarousel
      id="awesome-carousel"
      height="610"
      layout="fixed-height"
      type="carousel"
    >
      {[...Array(6)].map((v, index) => (
        <StyledAmpImg
          specName="default"
          key={Buffer.from(Math.random().toString()).toString('base64')}
          data-filter={index}
          src="/static/amp.jpg"
          width="1080"
          height="610"
          alt="AMP"
        />
      ))}
    </Amp.AmpCarousel>

    <h1>Hacker News</h1>
    <RelativeAmpList
      specName="default"
      src={(
        `https://www.graphqlhub.com/graphql?query=${
          encodeURIComponent(`
            {
              hn {
                topStories {
                  id
                  title
                  score
                  descendants
                }
              }
            }
          `)
        }`
      )}
      items="data.hn.topStories"
      layout="fill"
    >
      <Amp.Template specName="default" type="amp-mustache">
        <div>
          <a
            href="https://news.ycombinator.com/item?id={{id}}"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'{{title}} ⭐ {{score}} 💬 {{descendants}}'}
          </a>
        </div>
      </Amp.Template>
    </RelativeAmpList>
  </Container>
);
