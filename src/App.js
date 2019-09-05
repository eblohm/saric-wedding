import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import './styles/styles.scss';
import Header from './components/Header';
import Section from './components/Section';
import Dates from './components/Dates';
import BridalParty from './components/BridalParty';
import Event from './components/Event';
import Footer from './components/Footer';

const theme = {
  maroon: 'hsl(344, 73%, 22%)',
  sage: 'hsl(67, 24%, 28%)',
  mauve: 'hsl(351, 23%, 52%)',
  script: '"Great Vibes", sans-serif',
  sansSerif: '"Montserrat", sans-serif',
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

const BridalPartyStyles = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(3, 1fr);
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Header />
          <Section id="our-story" heading="our story" background="mauve">
            <img src="us.jpg" style={{ maxWidth: 100 + '%' }} />
          </Section>
          <Dates
            backgroundImage="https://via.placeholder.com/150"
            date="September 06, 2020 16:00:00 GMT-04:00"
            id="forever"
          />
          <Section
            id="bridal-party"
            heading="the bridal party"
            background="sage"
          >
            <BridalPartyStyles>
              <BridalParty
                name="Rebecca Barker"
                part="Maid of Honor"
                extraCss="maid-of-honor"
              >
                Rebecca Barker
              </BridalParty>
              <BridalParty
                name="Kelly Cole"
                part="Bridesmaid"
                extraCss="bridesmaid"
              >
                Kelly Cole
              </BridalParty>
              <BridalParty
                name="Sarah Mazurkiewicz"
                part="Bridesmaid"
                extraCss="bridesmaid"
              >
                Sarah Mazurkiewicz
              </BridalParty>
              <BridalParty
                name="Alex Blohm"
                part="Best Man"
                extraCss="best-man"
              >
                Alex Blohm
              </BridalParty>
              <BridalParty
                name="Phil Serraon"
                part="Groomsman"
                extraCss="groomsman"
              >
                Phil Serraon
              </BridalParty>
              <BridalParty
                name="David Dwyer"
                part="Groomsman"
                extraCss="groomsman"
              >
                David Dwyer
              </BridalParty>
            </BridalPartyStyles>
          </Section>
          <Event ceremonyTime="tbd" receptionTime="tbd" />
          <Section id="registry" heading="registries" background="mauve">
            Registry links will go here
          </Section>
          <Dates
            backgroundImage="none"
            date="October 10, 2010 00:00:00 GMT-04:00"
            id="beginning"
          />
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
