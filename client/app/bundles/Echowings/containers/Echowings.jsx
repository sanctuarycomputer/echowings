import React, { Component, PropTypes } from 'react';
import EchowingsWidget from '../components/EchowingsWidget';

export default class HelloWorld extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);
    this.state = { name: this.props.name };
  }

  render() {
    return (
      <EchowingsWidget name={this.state.name} />
    );
  }
}
