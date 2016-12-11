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
    borderRadius: '0px',
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
    opacity: '0.4',
    '@composes': [c.bgWhite]
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
    boxShadow: 'inset 0 0 0 0 transparent',
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
  mainDescription: {
    '@composes': [
      c.mdCol6,
      type
    ]
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
      ],
      [md]: {
        width: 'auto'
      }
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
      '@composes': [
        c.absolute,
        c.right0,
        c.top0,
        c.m3,
      ]
    }
  },
  center: {
    '@composes': [ c.center ]
  },
  third: {
    '@composes': [
      c.left,
      c.mdCol4,
    ],
    'h2': {
      fontFamily: '"Tramuntana", serif',
      letterSpacing: '.05em',
      padding: 0,
      '@composes': [
        c.mt0,
        c.mb5
      ],
      [md]: {
        padding: '0 2rem',
        margin: 0
      }
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
  },
  flip: {
    transform: 'rotate(180deg)'
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
      entryIsValid: false,
      showDownArrow: true,
      showUpArrow: false,
    }
  }

  scrollToTop() {
    scroll.scrollTo(100);
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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll(e) {
    let scrollTop = e.srcElement.body.scrollTop;
    let windowHeight = window.innerHeight;

    this.setState({
      showDownArrow: scrollTop < windowHeight/2 ? true : false,
      showUpArrow: scrollTop > windowHeight*2 - windowHeight*.5 ? true : false
    });
  }

  renderOptions() {
    return SELECT_OPTIONS.map((item, index) => {
      return <option key={index} value={item.value} label={item.label}></option>
    });
  }

  renderError(key, errors) {
    if (errors[key]) { return <p>{`${capitalize(key)} ${errors[key][0]}.`}</p>; }
  }

  renderActionPanel() {
    if (this.props.didSubmitWing) {
      return (
        <div className={styles.center}>
          <h1 className={styles.title}>{'Submitted.'}</h1>
          <a href={tweetLink} target='_blank' className={styles.noTextDecoration}>
            <p className={styles.textLink}>{'Tweet it.'}</p>
          </a>
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
      <Element name="top">
        <div className={styles.wrapper}>
          <Preload src={`assets/${flag}`}>
            <div className={styles.bg}></div>
          </Preload>
          <div className={styles.content}>
            <div className={styles.panel}>
              <div>
                <h1 className={styles.title}>
                  <span>{'Break out of your'}</span><br />
                  <span>{'echo chamber'}</span>
                </h1>
                <p className={styles.mainDescription}>{`Echowings uses basic Machine Learning to interpret the sentiment of ${this.props.totalTweets} tweets (and counting) published directly following the 2016 US Presidential Election. Sign up to receive monthly suggestions for accounts with an opposing political leaning to your own.`}</p>
              </div>
            </div>
            <Element name="signup">
              <div className={styles.panel}>
                {this.renderActionPanel()}
              </div>
            </Element>
            <div className={styles.panel}>
              <div>
                <div className={styles.third}>
                  <h2><a href={tweetLink} target='_blank'>{'Tweet Echowings to your Followers'}</a></h2>
                </div>
                <div className={styles.third}>
                  <h2>
                    <a href='https://www.github.com/sanctuarycomputer/echowings' target='_blank'>{'Contribute to Echowings on Github.'}</a>
                  </h2>
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
            <img className={styles.donkey} src={donkey} />
            <img className={styles.elephant} src={elephant} />
          </div>
          {this.state.showDownArrow &&
            <Link to="signup" smooth={true} duration={500}>
              <div className={styles.down}>
                <img src={down} />
              </div>
            </Link>
          }
          {this.state.showUpArrow &&
            <Link to="top" smooth={true} duration={500}>
              <div onClick={this.scrollToTop.bind(this)} className={styles.down}>
                <img className={styles.flip} src={down} />
              </div>
            </Link>
          }
        </div>
      </Element>
    );
  }
}
