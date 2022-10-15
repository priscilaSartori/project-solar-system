import React from 'react';
import PropTypes from 'prop-types';
import styles from './SolarSystem.module.css';
import missions from '../data/missions';

class PlanetCard extends React.Component {
  constructor(props) {
    super(props);
    this.filterMissoes = this.filterMissoes.bind(this);
  }

  filterMissoes(planetName) {
    missions.filter((mission) => {
      if (mission.destination === planetName) {
        return (
          <div>
            {mission.map(({ name, year, country, destination }) => (
              <li key={ name } className={ styles.missionCard }>
                <MissionCar
                  name={ name }
                  year={ year }
                  country={ country }
                  destination={ destination }
                />
              </li>
            ))}
          </div>
        );
      }
    });
  }

  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name" className={ styles.nomePlaneta }>
          { planetName }
          {' '}
        </p>
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ styles.imgPlaneta }
          onClick={ () => this.filterMissoes(planetName) }
        />
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
