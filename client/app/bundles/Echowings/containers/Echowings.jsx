import React, { Component, PropTypes } from 'react';
import EchowingsWidget from '../components/EchowingsWidget';
import UnsubscribeWidget from '../components/UnsubscribeWidget';
import ConfettiLayer from '../components/ConfettiLayer';

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
    totalTweets: PropTypes.number, // this is passed from the Rails view
    didUnsubscribe: PropTypes.bool
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
    if (this.props.didUnsubscribe) { return <UnsubscribeWidget /> }
    return (
      <div>
        <ConfettiLayer visible={this.state.didSubmitWing} />
        <EchowingsWidget
          totalTweets={this.props.totalTweets}
          submitWing={this.submitWing}
          errors={this.state.errors}
          isLoading={this.state.isLoading}
          didSubmitWing={this.state.didSubmitWing} />
      </div>
    );
  }
}
