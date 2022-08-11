import React from "react";

class ContainerHello extends React.Component {
  constructor() {
    super();
    this.state = { name: "akbar" };
  }

  changeName = () => {
    console.log("changename");
    this.setState({ name: "nugroho" });
  };

  changeName2 = () => {
    console.log("changeName2");
    this.setState({ name: "syafiq" });
  };

  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={this.changeName}>Change Name</button>
        <button onClick={this.changeName2}>Change Name 2</button>
      </div>
    );
  }
}

export default ContainerHello;
