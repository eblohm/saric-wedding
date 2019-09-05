import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import './styles/styles.scss';
import Banner from './components/Banner';
import OurStory from './components/OurStory';
import Section from './components/Section';
import AboutUs from './components/AboutUs';
import Dates from './components/Dates';
import BridalParty from './components/BridalParty';
import Event from './components/Event';
import RegistryLink from './components/RegistryLink';
import Footer from './components/Footer';

const theme = {
  maroon: 'hsl(344, 73%, 22%)',
  sage: 'hsl(67, 24%, 28%)',
  mauve: 'hsl(351, 23%, 52%)',
  white: 'hsl(0, 0%, 100%)',
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
  grid-template-columns: repeat(4, 1fr);
`;

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Banner />
          <OurStory />
          <AboutUs />
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
              <BridalParty name="Rebecca Barker" extraCss="maid-of-honor">
                Rebecca Barker
              </BridalParty>
              <BridalParty name="Kelly Cole" extraCss="bridesmaid">
                Kelly Cole
              </BridalParty>
              <BridalParty name="Sarah Mazurkiewicz" extraCss="bridesmaid">
                Sarah Mazurkiewicz
              </BridalParty>
              <BridalParty name="Kelsey Daldine" extraCss="bridesmaid">
                Kelsey Daldine
              </BridalParty>
              <BridalParty name="Alex Blohm" extraCss="best-man">
                Alex Blohm
              </BridalParty>
              <BridalParty name="Phil Serraon" extraCss="groomsman">
                Phil Serraon
              </BridalParty>
              <BridalParty name="David Dwyer" extraCss="groomsman">
                David Dwyer
              </BridalParty>
              <BridalParty name="Matt Kaiser" extraCss="groomsman">
                Matt Kaiser
              </BridalParty>
            </BridalPartyStyles>
          </Section>
          <Event ceremonyTime="5:00 PM" receptionTime="6:00 PM" />
          <Section id="registry" heading="registries" background="mauve">
            <RegistryLink
              link="https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/547469406"
              companyName="Bed Bath & Beyond"
              logo="bbb.jpg"
            />
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
