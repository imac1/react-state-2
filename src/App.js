import * as React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "light"
    };

    this.handleToggleMode = this.handleToggleMode.bind(this);
  }
  handleToggleMode() {
    this.setState(({ mode }) => ({
      mode: mode === "light" ? "dark" : "light"
    }));
  }
  render() {
    const { mode } = this.state;

    return (
      <main className={mode}>
        <button onClick={this.handleToggleMode}>
          {mode === "light" ? "Activate Dark Mode" : "Activate Light Mode"}
        </button>
      </main>
    );
  }
}

export default function App() {
  return <Container />;
}
