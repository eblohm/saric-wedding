import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  background-color: ${props =>
    props.background === 'mauve' ? props.theme.sage : props.theme.maroon};
  padding: 6rem 0;
`;

const Details = styled.div`
  margin: 0 auto;
  width: 90.6rem;
`;

const Heading = styled.h2`
  color: ${props => props.theme.sage};
  font-size: 3rem;
  text-align: center;
`;

const SectionText = styled.div`
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.8rem;
`;

const Section = props => (
  <Container id={props.id}>
    <Details>
      <Heading>{props.heading}</Heading>
      <SectionText>{props.children}</SectionText>
    </Details>
  </Container>
);

export default Section;
