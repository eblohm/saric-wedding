import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const BannerStyles = styled.section`
  background-image: url('http://placehold.it/1920x1920');
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

  h1 {
    font-family: ${props => props.theme.sansSerif};
    font-size: 5rem;
  }

  h2 {
    font-family: ${props => props.theme.sansSerif};
    font-size: 3.5rem;
  }
`;

const Banner = () => (
  <BannerStyles id="banner">
    <Header />
    <BannerText>
      <h1>Sarah and Eric are getting married!</h1>
      <h2>September 6, 2020 in Rochester Hills, MI</h2>
    </BannerText>
  </BannerStyles>
);

export default Banner;
