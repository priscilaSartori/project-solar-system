import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlanetCard.module.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name" className={ styles.planetName }>{ planetName }</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } width={ 190 } />
      </div>
    );
  }
}

PlanetCard.defaultProps = {
  planetName: '',
  planetImage: '',
};

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

export default PlanetCard;
