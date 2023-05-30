import React from 'react';
import styles from './SolarSystem.module.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 className={ styles.header }>Planetas do Sistema Solar</h1>
      </header>
    );
  }
}

export default Header;
