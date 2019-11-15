import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const BannerStyles = styled.section`
  background-image: url('banner.jpg');
  background-position: center;
  background-size: cover;
  height: 100vh;
  max-width: 100%;
  position: relative;
  top: 0;
  width: 100vw;
`;

const BannerText = styled.div`
  left: 50%;
  position: absolute;
  text-align: center;
  top: 60%;
  transform: translateX(-50%);
  width: 100%;

  h1,
  h2 {
    color: ${props => props.theme.white};
    text-shadow: 0 0 16px ${props => props.theme.black};
  }

  h1 {
    font-family: ${props => props.theme.serif};
    font-size: 3rem;

    @media screen and (min-width: 1200px) {
      font-size: 6rem;
    }
  }

  h2 {
    font-family: ${props => props.theme.sansSerif};
    font-size: 2rem;

    @media screen and (min-width: 1200px) {
      font-size: 3.5rem;
    }
  }
`;

const Banner = () => (
  <BannerStyles id="banner">
    <Header />
    <BannerText>
      <h1>sarah and eric are getting married!</h1>
      <h2>September 6, 2020 in Rochester Hills, MI</h2>
    </BannerText>
  </BannerStyles>
);

export default Banner;
