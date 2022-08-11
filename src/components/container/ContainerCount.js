import React from "react";

class ContainerHello extends React.Component {
  constructor() {
    super();
    this.state = { hitung: 0 };
  }

  add = () => {
    this.setState({ hitung: this.state.hitung + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count : {this.state.hitung}</h1>
        <button onClick={this.add}>Hitung</button>
      </div>
    );
  }
}

export default ContainerHello;
