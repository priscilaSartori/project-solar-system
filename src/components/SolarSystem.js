import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        { planets.map(({ name, image }) => (
          <li key={ name }>
            <PlanetCard
              planetName={ name }
              planetImage={ image }
            />
          </li>
        ))}
      </div>
    );
  }
}

export default SolarSystem;
