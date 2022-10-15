import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import styles from './SolarSystem.module.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className={ styles.solarSystem }>
        <ul className={ styles.listaPlanetas }>
          {planets.map(({ name, image }) => (
            <li key={ name } id={ name }>
              <PlanetCard
                planetName={ name }
                planetImage={ image }
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
