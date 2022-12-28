import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="texto">
        <p data-testid="mission-name" className="texto">{ name }</p>
        <p data-testid="mission-year" className="texto">{ year }</p>
        <p data-testid="mission-country" className="texto">{ country }</p>
        <p data-testid="mission-destination" className="texto">{ destination }</p>
      </div>
    );
  }
}

MissionCard.defaultProps = {
  name: '',
  year: '',
  country: '',
  destination: '',
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;
