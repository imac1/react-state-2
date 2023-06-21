/*
  Instructions
    Instead of having multiple methods to toggle "mode", create a single
    handleToggleMode method that is responsible for toggling
    the "mode".

    Also, render a single <button> instead of two.
*/

import * as React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "light"
    };

    this.handleLightMode = this.handleLightMode.bind(this);
    this.handleDarkMode = this.handleDarkMode.bind(this);
  }
  handleLightMode() {
    this.setState({ mode: "light" });
  }
  handleDarkMode() {
    this.setState({ mode: "dark" });
  }
  render() {
    const { mode } = this.state;

    return (
      <main className={mode}>
        {mode === "light" ? (
          <button onClick={this.handleDarkMode}>Activate Dark Mode</button>
        ) : (
          <button onClick={this.handleLightMode}>Activate Light Mode</button>
        )}
      </main>
    );
  }
}

export default function App() {
  return <Container />;
}
