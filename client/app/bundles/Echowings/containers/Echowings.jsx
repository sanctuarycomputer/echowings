import React, { Component, PropTypes } from 'react';
import EchowingsWidget from '../components/EchowingsWidget';

function handleResponse(response) {
  const { status, statusText } = response;
  if (status >= 200 && status < 300) {
    if (statusText === 'NO CONTENT') { return true; }
    return response.json();
  }
  return response.json().then(error => {
    throw error;
  });
}

function submitWing(email, polarity) {
  return fetch('/wings', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, polarity })
  }).then(handleResponse);
}

export default class HelloWorld extends Component {
  static propTypes = {
    totalTweets: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);
    this.state = {
      errors: [],
      isLoading: false,
      didSubmitWing: false
    }
  }

  submitWing = (email, polarity) => {
    this.setState({ isLoading: true });
    return submitWing(email, polarity)
             .then(() => this.setState({ didSubmitWing: true, isLoading: false}))
             .catch(({errors}) => this.setState({errors, isLoading: false}));
  }

  render() {
    return (
      <EchowingsWidget
        totalTweets={this.props.totalTweets}
        submitWing={this.submitWing}
        errors={this.state.errors}
        isLoading={this.state.isLoading}
        didSubmitWing={this.state.didSubmitWing} />
    );
  }
}
