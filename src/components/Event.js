import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LocationSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;

const Location = props => {
  return (
    <LocationSection id="event-details" className="event">
      <div className="event--ceremony">
        <h3 className="event--heading">Ceremony</h3>
        <p className="event--date">September 06, 2020</p>
        <p className="event--time">Time: {props.ceremonyTime}</p>
        <p className="event--location">
          900 W Avon Rd
          <br />
          Rochester Hills, MI
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.7602364537397!2d-83.15446448382072!3d42.66643602368924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e9d25a8b04bd%3A0x336dca6a77763cb!2sRivercrest+Banquet+Center!5e0!3m2!1sen!2sus!4v1565399158873!5m2!1sen!2sus"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0, width: '100%' }}
        allowFullScreen
        title="Event Location"
      />
      <div className="event--reception">
        <h3 className="event--heading">Reception</h3>
        <p className="event--date">September 06, 2020</p>
        <p className="event--time">Time: {props.receptionTime}</p>
        <p className="event--location">
          900 W Avon Rd
          <br />
          Rochester Hills, MI
        </p>
      </div>
    </LocationSection>
  );
};

Location.PropTypes = {
  ceremonyTime: PropTypes.string.isRequired,
  receptionTime: PropTypes.string.isRequired,
};

export default Location;
