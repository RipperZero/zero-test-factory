import { Component, ErrorInfo, ReactNode } from "react";

type Props = {
  renderError?: (error: Error) => ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  children?: ReactNode;
};

type State =
  | {
      hasError: false;
    }
  | {
      hasError: true;
      error: Error;
    };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static defaultProps: Partial<Props> = {
    onError: (error) => {
      console.log(`Error:${error}`, "color: red");
    },
    renderError: (_error) => {
      return <div>Something went wrong</div>;
    },
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.props.renderError) {
      return this.props.renderError(this.state.error);
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
