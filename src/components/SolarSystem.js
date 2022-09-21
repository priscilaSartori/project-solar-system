import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="solar-system">
        <h1>Sistema Solar</h1>
        <Title headline="Planetas" />
        { planets.map((planet) => (<PlanetCard key={ planetName } planetName={ planet.name } planetImage={ planet.image } />))}
      </div>
    );
  }
}

export default SolarSystem;
