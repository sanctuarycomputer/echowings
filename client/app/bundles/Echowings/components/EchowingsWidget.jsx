import React, { Component, PropTypes } from 'react';
import flag from '../../../../assets/flag.gif';
import logo from '../../../../assets/logo.svg';
import down from '../../../../assets/down.svg';
import selectarrow from '../../../../assets/selectarrow.svg';
import woff2 from '../../../../assets/Tramuntana-Heavy.woff2';
import woff from '../../../../assets/Tramuntana-Heavy.woff';
import ttf from '../../../../assets/Tramuntana-Heavy.ttf';
import vudu from 'vudu';
import Scroll from 'react-scroll';
import Waypoint from 'react-waypoint';

const Link = Scroll.Link;
const Element = Scroll.Element;

const Tramuntana = vudu.addFontFace({  
  fontFamily: 'Tramuntana',
  src: `url(assets/${woff2}) format("woff2"),
    url(assets/${woff}) format("woff"),
    url(assets/${ttf}) format("truetype")`,
  fontWeight: 'normal',
  fontStyle: 'normal'
});

const c = vudu.atomics;

const styles = vudu({
  wrapper: {
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    '*': { boxSizing: 'border-box' }
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
    boxShadow: 'inset 0 0 0 100px white',
    pointerEvents: 'none',
    '@composes': [
      c.col12,
      c.fixed,
      c.top0,
      c.left0,
      c.z2
    ],
    'h5': {
      left: '50%',
      transform: 'translateX(-50%)',
      fontWeight: '500',
      letterSpacing: '.2em',
      paddingTop: '2.5rem',
      '@composes': [
        c.m0,
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
      }
    }
  },
  title: {
    fontFamily: '"Tramuntana", serif',
    fontSize: '5rem',
    marginTop: '-3rem',
    '@composes': [
      c.mb3
    ]
  },
  logo: {
    left: '50%',
    transform: 'translateX(-50%)',
    top: '2.25rem',
    '@composes': [
      c.absolute,
    ]
  },
  content: {
    '@composes': [
      c.white,
      c.relative,
      c.z1,
    ],
    'p': {
      lineHeight: '1.6',
      '@composes': [
        c.col6,
      ]
    }
  },
  panel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    borderBottom: '1px solid rgba(255,255,255,.5)'
  },
  container: {
    '@composes': [
      c.mxAuto,
      c.col8
    ]
  },
  actionBar: {
    '@composes': [
      c.h3,
      c.col12
    ],
    'label': {
      fontFamily: '"Tramuntana", serif',
      letterSpacing: '.05em',
      '@composes': [
        c.block,
        c.mb2,
        c.h2
      ],
      ':nth-child(3)': {
        '@composes': [ c.mt4 ]
      }
    },
    'input[type="text"]': {
      border: '2px solid white',
      backgroundColor: 'rgba(255,255,255,.2)',
      fontSize: 'inherit',
      color: 'white',
      '@composes': [
        c.p2,
        c.col12
      ]
    },
    'select': {
      width: '100%',
      height: '100%',
      opacity: 0,
      cursor: 'pointer',
      '@composes': [
        c.absolute,
        c.left0,
        c.top0
      ]
    },
    'button': {
      border: 0,
      fontFamily: 'inherit',
      cursor: 'pointer',
      '@composes': [
        c.bgWhite,
        c.py2,
        c.px4,
        c.mt5,
        c.caps,
        c.h3
      ]
    }
  },
  select: {
    border: '2px solid currentColor',
    backgroundColor: 'rgba(255,255,255,.2)',
    '@composes': [
      c.inlineBlock,
      c.alignMiddle,
      c.relative,
      c.p2,
      c.col12
    ],
    'img': {
      marginTop: '1.25rem',
      '@composes': [
        c.absolute,
        c.right0,
        c.top0,
        c.mx3,
      ]
    }
  },
  center: {
    '@composes': [ c.center ]
  },
  lastPanel: {
    '@composes': [ c.col12 ]
  },
  third: {
    '@composes': [
      c.left,
      c.col4,
    ],
    'h2': {
      fontFamily: '"Tramuntana", serif',
      letterSpacing: '.05em',
      '@composes': [ c.pr5 ]
    },
    'a': {
      '@composes': [ c.white ]
    }
  },
  down: {
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '4.25rem',
    border: '3px solid currentColor',
    cursor: 'pointer',
    '@composes': [
      c.fixed,
      c.bgWhite,
      c.py2,
      c.px4,
      c.z4,
    ]
  }
});

export default class EchowingsWidget extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { 
      selectValue: 'Select leaning',
      selectTouched: false,
      showDownArrow: true,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {
    let scrollTop = e.srcElement.body.scrollTop;
    this.setState({
      showDownArrow: scrollTop < window.innerHeight/2 ? true : false
    });
  }

  render() {

    const statefulStyle = vudu({
      select: {
        color: this.state.selectTouched ? 'red' : 'silver'
      }
    });

    return (
      <div className={styles.wrapper}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <div className={styles.panel}>
            <div className={styles.container}>
              <h1 className={styles.title}>
                <span>{'Break out of your'}</span><br />
                <span>{'echo chamber'}</span>
              </h1>
              <p>{'Echowings uses Natural Language Processing to interpret the sentiment of 82,183 Twitter users (and counting) directly following the 2016 US Presidential Election. It uses this dataset to send monthly suggestions for accounts with an opposing political leaning to your own.'}</p>
            </div>
          </div>
          <Element name="signup">
            <div className={styles.panel}>
              <div className={styles.container}>
                <form className={styles.actionBar}>
                  <label>{'My email is:'}</label>
                  <input type='text' placeholder={'me@example.com'} />
                  <label>{'My political leaning is:'}</label>
                  <div className={styles.select}>
                    <span className={statefulStyle.select}>{this.state.selectValue}</span>
                    <select onChange={this.changeSelectText}>
                      <option selected>—</option>
                      <option>Left-wing Liberal</option>
                      <option>Right-wing Conservative</option>
                      <option>Independent</option>
                    </select>
                    <img src={selectarrow} />
                  </div>
                  <div className={styles.center}>
                    <button type='submit'>{'I want to “get” America'}</button>
                  </div>
                </form>
              </div>
            </div>
          </Element>
          <div className={styles.panel}>
            <div className={styles.container}>
              <div className={styles.lastPanel}>
                <div className={styles.third}>
                  <h2><a href='#'>{'A project by Sanctuary Computer.'}</a></h2>
                </div>
                <div className={styles.third}>
                  <h2><a href='#'>{'Contribute to Echowings on Github.'}</a></h2>
                </div>
                <div className={styles.third}>
                  <h2><a href='#'>{'A project by NYC’s Sanctuary Computer.'}</a></h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.border}>
          <img className={styles.logo} src={logo} />
          <h5>
            <span>Echo</span>
            <span>Wings</span>
          </h5>
        </div>
        <Link to="signup" smooth={true} duration={500}>
          {this.state.showDownArrow &&
            <div className={styles.down}>
              <img src={down} />
            </div>
          }
        </Link>
      </div>
    );
  }
}
