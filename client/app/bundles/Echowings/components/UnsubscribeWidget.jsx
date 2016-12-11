import React, { Component, PropTypes } from 'react';
import flag from '../../../../assets/flag.gif';
import logo from '../../../../assets/logo.svg';
import down from '../../../../assets/down.svg';
import donkey from '../../../../assets/donkey.svg';
import elephant from '../../../../assets/elephant.svg';
import selectarrow from '../../../../assets/selectarrow.svg';
import Scroll from 'react-scroll';
import Preload from 'repreload';
import vudu from 'vudu';

const Link = Scroll.Link;
const Element = Scroll.Element;

const type = {
  letterSpacing: '1px',
  fontWeight: '300',
  lineHeight: '1.8rem'
};

const buttonType = {
  letterSpacing: '1px',
  fontWeight: '600',
  fontSize: '14px',
  width: '100%'
};

const vertCenter = {
  top: '50%',
  transform: 'translateY(-50%)'
};

const c = vudu.atomics;
const md = '@media (min-width: 54em)';

const styles = vudu({
  wrapper: {
    backgroundColor: 'black',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    '*': { boxSizing: 'border-box' }
  },
  textLink: {
    color: 'white'
  },
  input: {
    outline: 'none',
    '@composes': [type]
  },
  selectLabel: {
    '@composes': [type]
  },
  validButton: {
    pointerEvents: 'auto',
    '@composes': [c.bgWhite]
  },
  invalidButton: {
    pointerEvents: 'none',
    opacity: '0.4'
  },
  noTextDecoration: {
    textDecoration: 'none'
  },
  bg: {
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
      backgroundColor: 'rgba(0,0,0,.6)',
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
    boxShadow: 'inset 0 0 0 10px white',
    pointerEvents: 'none',
    '@composes': [
      c.col12,
      c.fixed,
      c.top0,
      c.left0,
      c.z2
    ],
    [md]: {
      boxShadow: 'inset 0 0 0 100px white',
    }
  },
  header: {
    backgroundColor: 'white',
    height: '4rem',
    '@composes': [
      c.absolute,
      c.left0,
      c.top0,
      c.col12
    ],
    'h5': {
      left: '50%',
      transform: 'translateX(-50%)',
      fontWeight: '500',
      letterSpacing: '.2em',
      marginTop: '-.3rem',
      marginBottom: 0,
      '@composes': [
        c.absolute,
        c.caps,
      ],
      'span:nth-child(1)': {
        '@composes': [
          c.pr4,
          c.inlineBlock,
        ]
      },
      'span:nth-child(2)': {
        left: '1rem',
        '@composes': [
          c.pl4,
          c.inlineBlock,
          c.relative
        ]
      },
      [md]: {
        marginTop: '.7rem'
      }
    },
    [md]: {
      backgroundColor: 'transparent',
      height: 'auto',
    }
  },
  title: {
    fontFamily: '"Tramuntana", serif',
    fontSize: '3rem',
    marginTop: '-3rem',
    lineHeight: '1.2',
    '@composes': [
      c.mb3
    ],
    [md]: {
      fontSize: '5rem',
    }
  },
  logo: {
    left: '50%',
    transform: 'translateX(-50%)',
    top: '1.25rem',
    '@composes': [
      c.relative,
    ],
    [md]: {
      top: '2.25rem',
    }
  },
  content: {
    paddingTop: '4rem',
    '@composes': [
      c.white,
      c.relative,
      c.mxAuto,
      c.col10,
      c.mdCol8,
      c.z1,
    ],
    'p': {
      '@composes': [type]
    },
    [md]: {
      paddingTop: 0
    }
  },
  panel: {
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6rem 0',
    maxWidth: '64rem',
    '@composes': [ c.mxAuto ],
    [md]: {
      height: '100vh',
      padding: 0
    }
  },
  center: {
    '@composes': [ c.center ]
  },
  donkey: {
    display: 'none',
    '@composes': [
      vertCenter,
      c.absolute,
      c.left0,
      c.mx3,
    ],
    [md]: {
      '@composes': [
        c.block
      ]
    }
  },
  elephant: {
    display: 'none',
    '@composes': [
      vertCenter,
      c.absolute,
      c.right0,
      c.mx3,
    ],
    [md]: {
      '@composes': [
        c.block
      ]
    }
  }
});

export default class EchowingsWidget extends Component {
  render() {
    return (
      <Element name="top">
        <div className={styles.wrapper}>
          <Preload src={`assets/${flag}`}>
            <div className={styles.bg}></div>
          </Preload>
          <div className={styles.content}>
            <div className={styles.panel}>
              <div>
                <h1 className={styles.title}>
                  <span>{'Success!'}</span><br />
                </h1>
              </div>
            </div>
          </div>
          <div className={styles.border}>
            <div className={styles.header}>
              <img className={styles.logo} src={logo} />
              <h5>
                <span>Echo</span>
                <span>Wings</span>
              </h5>
            </div>
            <img className={styles.donkey} src={donkey} />
            <img className={styles.elephant} src={elephant} />
          </div>
        </div>
      </Element>
    );
  }
}
