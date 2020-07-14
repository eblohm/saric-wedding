import React from 'react';
import styled from 'styled-components';

const PandemicStyles = styled.section`
  background-color: ${(props) => props.theme.mauve};
  color: ${(props) => props.theme.white};
  padding: 1rem 0 5rem;
  text-align: center;

  h2 {
    font-size: 5rem;
    text-align: center;
  }

  p,
  ul {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 1.6rem;

    @media screen and (min-width: 1200px) {
      font-size: 1.8rem;
    }
  }
`;

const PandemicUdpate = () => {
  return (
    <PandemicStyles id='pandemic'>
      <h2>pandemic update</h2>
      <p>
        Since COVID-19 is on all our minds, we will take the following
        precautions on the wedding day:
      </p>
      <ul>
        <li>Hand sanitizing stations will be provided</li>
        <li>The wedding ceremony will be held on a large, outdoor patio</li>
        <li>
          Masks will be mandatory anytime you are inside, except while dining
        </li>
        <li>
          All attempts will be made to social distance at and between tables
          during dinner
        </li>
        <li>The patio will be open throughout the evening</li>
      </ul>
      <p>
        Because this pandemic is very real and some may not feel comfortable
        attending, we understand and you will be missed. We will keep this
        section of the website updated with any new information. We look forward
        to seeing you in September and celebrating with us.
      </p>
    </PandemicStyles>
  );
};

export default PandemicUdpate;
