import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import styles from './Missions.module.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className={ styles.missions }>
        <Title headline="Missões" />
        { missions.map(({ name, year, country, destination }) => (
          <li key={ name } className={ styles.missionCard }>
            <MissionCard
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
}

export default Missions;
