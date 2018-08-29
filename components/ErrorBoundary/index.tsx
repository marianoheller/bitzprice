import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
}

export default class ErrorBoundary extends React.Component<any, ErrorBoundaryState> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true, error });
  }

  render() {
    if (this.state.hasError) {
      return <p>Error: something went {this.state.error.toString()} </p>;
    }
    return this.props.children;
  }
}