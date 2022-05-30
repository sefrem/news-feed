import React, { Component, ErrorInfo, ReactNode } from "react";

import Button from "../UI/Button";

class ErrorBoundary extends Component<{ children: ReactNode }> {
  state = {
    isError: false,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ isError: true });
  }

  render() {
    const { children } = this.props;
    const { isError } = this.state;

    if (isError) {
      return (
        <div>
          Something bad happened. Please refresh the page.
          <Button
            text="Refresh"
            onClick={() => {
              document.location.reload();
            }}
          />
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
