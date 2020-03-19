import React from "react";
import logo from "../../../../logo119.png";
import NavBar from "../../modules/layout/navBar/NavBar";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>
          <br></br>
          <br></br>
          <p>Западно и Средноевропейски митрополит Антоний</p>
          <p>~Благословение против COVID-19~</p>
        </header>
      </div>
    );
  }
}

HomePage.propTypes = {};

export default HomePage;
