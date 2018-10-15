import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? (
      <div>
        <h1>Error has occured!</h1>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
