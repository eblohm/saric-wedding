import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import './styles/styles.scss';
import Banner from './components/Banner';
import OurStory from './components/OurStory';
import Section from './components/Section';
// import AboutUs from './components/AboutUs';
import Dates from './components/Dates';
import PandemicUpdate from './components/PandemicUdpate';
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
  script: '"Sunberry", sans-serif',
  sansSerif: '"Montserrat", sans-serif',
};

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Sunberry';
    src: url('/Sunberry.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.script};
    font-weight: 400;
  }
`;

const BridalPartyStyles = styled.div`
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: repeat(1, 1fr);

  @media screen and (min-width: 770px) {
    grid-template-columns: repeat(2, 1fr);
  }

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
          <PandemicUpdate />
          <OurStory />
          <Dates date='September 06, 2020 16:00:00 GMT-04:00' id='forever' />
          <Section
            id='bridal-party'
            heading='the bridal party'
            background='sage'
          >
            <BridalPartyStyles>
              <BridalParty
                name='rebecca barker'
                extraCss='maid-of-honor'
                image='rebecca.jpg'
              >
                rebecca barker
              </BridalParty>
              <BridalParty
                name='kelly cole'
                extraCss='bridesmaid'
                image='kelly.jpg'
              >
                kelly cole
              </BridalParty>
              <BridalParty
                name='sarah mazurkiewicz'
                extraCss='bridesmaid'
                image='sarah.jpg'
              >
                sarah mazurkiewicz
              </BridalParty>
              <BridalParty
                name='kelsey daldine'
                extraCss='bridesmaid'
                image='kelsey.jpg'
              >
                kelsey daldine
              </BridalParty>
              <BridalParty
                name='alex blohm'
                extraCss='best-man'
                image='alex.jpg'
              >
                alex blohm
              </BridalParty>
              <BridalParty
                name='phil serraon'
                extraCss='groomsman'
                image='phil.jpg'
              >
                phil serraon
              </BridalParty>
              <BridalParty
                name='david dwyer'
                extraCss='groomsman'
                image='david.jpg'
              >
                david dwyer
              </BridalParty>
              <BridalParty
                name='kyle belanger'
                extraCss='groomsman'
                image='kyle.jpg'
              >
                kyle belanger
              </BridalParty>
            </BridalPartyStyles>
          </Section>
          <Event ceremonyTime='5:30 PM' receptionTime='6:30 PM' />
          <Section id='registry' heading='registries' background='mauve'>
            <p>
              Thank you for considering sending us a gift! We are registered at
              the following places, or if you'd like to help contribute to our
              honeymoon, you can donate with the PayPal link.
            </p>
            <RegistryLink
              link='https://www.amazon.com/wedding/eric-blohm-sarah-barker-rochester-hills-september-2020/registry/1AWJ2LYQQ2I1G
'
              companyName='Amazon'
              logo='amazon.png'
            />
            <RegistryLink
              link='https://paypal.me/pools/c/8hZIXhCqdQ'
              companyName='PayPal Honeymoon Fund'
              logo='paypal.png'
            />
            <RegistryLink
              link='https://www.target.com/gift-registry/gift/Sarah+Eric'
              companyName='Target'
              logo='target.png'
            />
            <RegistryLink
              link='https://www.wayfair.com/registry/wedding/SarahAndEric09.06.2020'
              companyName='Wayfair'
              logo='wayfair.png'
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
