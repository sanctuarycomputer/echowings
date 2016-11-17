import React, { Component, PropTypes } from 'react';
import flag from '../../../../assets/flag.gif';
import logo from '../../../../assets/logo.svg';
import down from '../../../../assets/down.svg';
import selectarrow from '../../../../assets/selectarrow.svg';
import woff2 from '../../../../assets/Tramuntana-Heavy.woff2';
import woff from '../../../../assets/Tramuntana-Heavy.woff';
import ttf from '../../../../assets/Tramuntana-Heavy.ttf';
import vudu from 'vudu';

const tweetLink = "https://twitter.com/home?status=I'm%20getting%20to%20know%20america%20via%20https%3A//www.echowings.org%20%23echowings";

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function validateEmail(email) {
  let re = /(.+)@(.+){2,}\.(.+){2,}/;
  return re.test(email);
}

const type = {
  letterSpacing: '1px',
  fontWeight: '300',
  lineHeight: '1.8rem'
}

const buttonType = {
  letterSpacing: '1px',
  fontWeight: '600',
  fontSize: '14px'
}

const Tramuntana = vudu.addFontFace({
  fontFamily: 'Tramuntana',
  src: `url(assets/${woff2}) format("woff2"),
    url(assets/${woff}) format("woff"),
    url(assets/${ttf}) format("truetype")`,
  fontWeight: 'normal',
  fontStyle: 'normal'
});

const c = vudu.atomics;

const md = '@media (min-width: 48em)';

const styles = vudu({
  wrapper: {
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
      '@composes': [c.mdCol6, type]
    },
    [md]: {
      paddingTop: 0
    }
  },
  panel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1px solid rgba(255,255,255,.75)',
    padding: '6rem 0',
    [md]: {
      height: '100vh',
      padding: 0
    }
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
      outline: 'none',
      border: 0,
      fontFamily: 'inherit',
      cursor: 'pointer',
      transition: '1s opacity',
      '@composes': [
        c.py2,
        c.px4,
        c.mt5,
        c.caps,
        buttonType
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
    textAlign: 'center',
    '@composes': [ c.col12 ]
  },
  third: {
    '@composes': [
      c.left,
      c.mdCol4,
    ],
    'h2': {
      fontFamily: '"Tramuntana", serif',
      letterSpacing: '.05em',
      padding: '0rem 2rem'
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
    display: 'none',
    '@composes': [
      c.fixed,
      c.bgWhite,
      c.py2,
      c.px4,
      c.z4,
    ],
    [md]: {
      display: 'block'
    }
  }
});

const SELECT_OPTIONS = [
  {
    label: '-',
    value: ''
  },
  {
    label: 'Left-wing Liberal',
    value: 'left'
  },
  {
    label: 'Right-wing Conservative',
    value: 'right'
  },
  {
    label: 'Independent',
    value: 'middle'
  }
];

export default class EchowingsWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectLabel: SELECT_OPTIONS[0].label,
      selectValue: SELECT_OPTIONS[0].value,
      selectTouched: false,
      emailAddress: '',
      entryIsValid: false
    }
  }

  submitWing = e => {
    e.preventDefault();
    this.props.submitWing(this.state.emailAddress, this.state.selectValue);
  }

  validateInputs = () => {
    let emailIsValid = validateEmail(this.state.emailAddress);
    let selectIsValid = this.state.selectValue.length > 0;
    this.setState({ entryIsValid: [emailIsValid, selectIsValid].every(truthy => truthy) });
  }

  changeEmail = e => {
    this.setState({ emailAddress: e.target.value });
    // Validation
    let emailIsValid = validateEmail(e.target.value);
    let selectIsValid = this.state.selectValue.length > 0;
    this.setState({ entryIsValid: [emailIsValid, selectIsValid].every(truthy => truthy) });
  }

  changeSelectText = e => {
    let option = e.target.options[e.target.selectedIndex];
    this.setState({
      selectLabel: option.label,
      selectValue: option.value,
      selectTouched: true
    });
    // Validation
    let emailIsValid = validateEmail(this.state.emailAddress);
    let selectIsValid = option.value.length > 0;
    this.setState({ entryIsValid: [emailIsValid, selectIsValid].every(truthy => truthy) });
  }

  renderOptions() {
    return SELECT_OPTIONS.map((item, index) => {
      return <option key={index} value={item.value} label={item.label}></option>
    });
  }

  renderError(key, errors) {
    if (errors[key]) { return <div>{`${capitalize(key)} ${errors[key][0]}.`}</div>; }
  }

  renderActionPanel() {
    if (this.props.didSubmitWing) {
      return (
        <div>
          <h1 className={styles.title}>{'Submitted.'}</h1>
          <a href={tweetLink} target='_blank'><p className={styles.textLink}>{'Tweet about Echowings.'}</p></a>
        </div>
      );
    }
    return (
      <form className={styles.actionBar} onSubmit={this.submitWing}>
        <label>{'My email is:'}</label>

        <input className={styles.input} type='text' placeholder={'me@example.com'} onChange={this.changeEmail} />
        {this.renderError('email', this.props.errors)}

        <label>{'My political leaning is:'}</label>
        <div className={styles.select}>
          <span className={styles.selectLabel}>{this.state.selectLabel}</span>
          <select onChange={this.changeSelectText}>
            {this.renderOptions()}
          </select>
          <img src={selectarrow} />
        </div>
        {this.renderError('polarity', this.props.errors)}

        <div className={styles.center}>
          <button
            className={this.state.entryIsValid ? styles.validButton : styles.invalidButton}
            type='submit'>
            {this.props.isLoading ? 'Submitting...' : 'I want to “get” America'}
          </button>
        </div>
      </form>
    );
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.bg}></div>
        <div className={styles.content}>
          <div className={styles.panel}>
            <div>
              <h1 className={styles.title}>
                <span>{'Break out of your'}</span><br />
                <span>{'echo chamber'}</span>
              </h1>
              <p>
                {`Echowings uses basic Machine Learning to interpret the sentiment of ${this.props.totalTweets} Tweets (and counting) directly following the 2016 US Presidential Election.  As a means of diversifying your “political echo chamber”, Echowings uses this dataset to send monthly suggestions for accounts with an opposing political leaning to your own.`}
              </p>
            </div>
          </div>
          <div className={styles.panel}>
            {this.renderActionPanel()}
          </div>
          <div className={styles.panel}>
            <div className={styles.lastPanel}>
              <div className={styles.third}>
                <h2><a href={tweetLink} target='_blank'>{'Tweet Echowings to your Followers'}</a></h2>
              </div>
              <div className={styles.third}>
                <h2><a href='https://www.github.com/sanctuarycomputer/echowings' target='_blank'>{'Contribute to Echowings on Github.'}</a></h2>
              </div>
              <div className={styles.third}>
                <h2><a href='http://www.sanctuary.computer' target='_blank'>{'A project by NYC’s Sanctuary Computer.'}</a></h2>
              </div>
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
        </div>
        <div className={styles.down}>
          <img src={down} />
        </div>
      </div>
    );
  }
}
