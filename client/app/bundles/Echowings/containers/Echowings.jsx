import React, { Component, PropTypes } from 'react';
import EchowingsWidget from '../components/EchowingsWidget';

function submitWing(email, polarity) {
  return fetch('/wings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, polarity })
  });
}

export default class HelloWorld extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  render() {
    return (
      <EchowingsWidget submitWing={submitWing} />
    );
  }
}
