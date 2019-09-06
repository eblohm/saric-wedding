import React from 'react';
import styled from 'styled-components';

const OurStoryContainer = styled.section`
  display: grid;
  grid-template-columns: 35% 1fr;
`;

const OurStoryImage = styled.div`
  display: flex;

  img {
    max-width: 100%;
  }
`;

const OurStoryText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 2rem 5rem;

  h2 {
    font-size: 5rem;
    margin: 0;
  }

  p {
    font-family: ${props => props.theme.sansSerif};
    font-size: 2rem;
  }
`;

const OurStory = () => (
  <OurStoryContainer>
    <OurStoryImage>
      <img src="us.jpg" alt="Sarah and Eric" />
    </OurStoryImage>
    <OurStoryText>
      <h2>Our Story</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio
        ut sem nulla pharetra diam sit. Vitae suscipit tellus mauris a diam.
        Vitae congue eu consequat ac felis. Diam vel quam elementum pulvinar
        etiam non quam lacus suspendisse. Id diam vel quam elementum pulvinar.
        Elit eget gravida cum sociis natoque penatibus et magnis. Vitae
        elementum curabitur vitae nunc sed velit dignissim sodales. Id cursus
        metus aliquam eleifend mi in. Ut sem nulla pharetra diam sit amet nisl
        suscipit adipiscing. Arcu felis bibendum ut tristique et egestas. Nisl
        purus in mollis nunc sed id. Libero id faucibus nisl tincidunt eget
        nullam. Euismod elementum nisi quis eleifend quam. Eu volutpat odio
        facilisis mauris sit amet.
      </p>
      <p>
        Amet purus gravida quis blandit turpis cursus. Dictum sit amet justo
        donec enim diam. Faucibus nisl tincidunt eget nullam non. Est
        pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
        Rhoncus mattis rhoncus urna neque viverra justo nec. Turpis in eu mi
        bibendum neque egestas congue quisque. Urna nunc id cursus metus aliquam
        eleifend mi. Sit amet volutpat consequat mauris nunc. Gravida neque
        convallis a cras semper. Sit amet cursus sit amet. Consequat interdum
        varius sit amet mattis vulputate enim nulla. Aliquet nibh praesent
        tristique magna sit amet purus gravida. Lectus urna duis convallis
        convallis tellus id interdum. Volutpat maecenas volutpat blandit aliquam
        etiam erat velit scelerisque. Commodo quis imperdiet massa tincidunt
        nunc pulvinar sapien et. Aliquet nec ullamcorper sit amet. Tincidunt
        praesent semper feugiat nibh. Nullam non nisi est sit amet.
      </p>
    </OurStoryText>
  </OurStoryContainer>
);

export default OurStory;
