import React, { Component, PropTypes } from 'react';
import flag from '../../../../assets/flag.gif';
import logo from '../../../../assets/logo.svg';
import vudu from 'vudu';

const c = vudu.atomics;

const styles = vudu({
  container: {
    height: '100%',
    backgroundImage: `url(assets/${flag})`,
    backgroundSize: 'cover',
    '@composes': [ 
      c.fixed, 
      c.top0, 
      c.left0,
      c.bgBlack,
      c.col12
    ],
    ':after': {
      content: '""',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,.5)',
      '@composes': [
        c.absolute,
        c.top0,
        c.left0,
        c.col12,
        c.block
      ]
    }
  },
  border: {
    height: '100%',
    boxShadow: 'inset 0 0 0 100px white',
    pointerEvents: 'none',
    '@composes': [
      c.col12,
      c.fixed,
      c.top0,
      c.left0,
      c.z1,
      c.relative
    ]
  },
  logo: {
    left: '50%',
    transform: 'translateX(-50%)',
    top: '2rem',
    '@composes': [
      c.absolute,
    ]
  }
});

export default class EchowingsWidget extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.border}>
          <img className={styles.logo} src={logo} />
        </div>
      </div>
    );
  }
}
