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

    this.handleModes = this.handleModes.bind(this);
    
  }
  handleModes() {
    this.setState((prevState) => ({
      mode: prevState.mode === "light" ? "dark" : "light"
    }));
  }
  

  render() {
    const { mode } = this.state;

    return (
      <main className={mode}>{
        <button onClick={this.handleModes}>{mode === "light" ? "Activate Dark Mode" : "Activate Light Mode"}</button>
      }
      </main>
    );
  }
}

export default function App() {
  return <Container />;
}
