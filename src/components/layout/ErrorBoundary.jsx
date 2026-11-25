import { Component } from 'react';

/** Catches render errors and failed page downloads (e.g. after a new deploy). */
export default class ErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;
    return (
      <div role="alert" className="px-5 py-28 text-center">
        <h1 className="text-3xl font-bold text-navy-900">Something went wrong</h1>
        <p className="mt-3 text-muted">Check your connection, then reload the page.</p>
        <button type="button" onClick={() => window.location.reload()} className="mt-6 min-h-11 rounded-full bg-accent-600 px-6 font-semibold text-white">
          Reload
        </button>
      </div>
    );
  }
}
