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
  black: 'hsl(0, 0%, 0%)',
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
    margin: 0 auto;
    max-width: 1920px;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;

const BridalPartyStyles = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
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
              <BridalParty
                name="Rebecca Barker"
                extraCss="maid-of-honor"
                image="rebecca.jpg"
              >
                Rebecca Barker
              </BridalParty>
              <BridalParty
                name="Kelly Cole"
                extraCss="bridesmaid"
                image="kelly.jpg"
              >
                Kelly Cole
              </BridalParty>
              <BridalParty
                name="Sarah Mazurkiewicz"
                extraCss="bridesmaid"
                image="sarah.jpg"
              >
                Sarah Mazurkiewicz
              </BridalParty>
              <BridalParty
                name="Kelsey Daldine"
                extraCss="bridesmaid"
                image="kelsey.jpg"
              >
                Kelsey Daldine
              </BridalParty>
              <BridalParty
                name="Alex Blohm"
                extraCss="best-man"
                image="alex.jpg"
              >
                Alex Blohm
              </BridalParty>
              <BridalParty
                name="David Dwyer"
                extraCss="groomsman"
                image="david.jpg"
              >
                David Dwyer
              </BridalParty>
              <BridalParty
                name="Phil Serraon"
                extraCss="groomsman"
                image="phil.jpg"
              >
                Phil Serraon
              </BridalParty>
              <BridalParty
                name="Matt Kaiser"
                extraCss="groomsman"
                image="matt.jpg"
              >
                Matt Kaiser
              </BridalParty>
            </BridalPartyStyles>
          </Section>
          <Event ceremonyTime="5:30 PM" receptionTime="6:30 PM" />
          <Section id="registry" heading="registries" background="mauve">
            <p>
              Thank you for considering sending us a gift! We are registered at
              the following places, or if you'd like to help contribute to our
              honeymoon, you can donate with the PayPal link.
            </p>
            <RegistryLink link="#" companyName="Amazon" logo="amazon.png" />
            <RegistryLink
              link="https://paypal.me/pools/c/8hZIXhCqdQ"
              companyName="PayPal Honeymoon Fund"
              logo="paypal.png"
            />
          </Section>
          {/* <Dates
            backgroundImage="none"
            date="October 10, 2010 00:00:00 GMT-04:00"
            id="beginning"
          /> */}
          <Footer />
        </>
      </ThemeProvider>
    );
  }
}

export default App;
