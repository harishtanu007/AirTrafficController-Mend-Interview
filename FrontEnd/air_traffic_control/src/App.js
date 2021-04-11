import "./App.css";
import AddAircraft from "./components/AddAircraft";
import DequeueAircraft from "./components/DequeueAircraft";
import AircraftList from "./components/AircraftList";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Component } from "react";

export default class App extends Component {
  state = {
    aircrafts: [],
    errormessage: "",
  };
  constructor() {
    super();
    this.handleAircraftList = this.handleAircraftList.bind(this);
    this.handleErrorMessage = this.handleErrorMessage.bind(this);
  }

  handleAircraftList(value) {
    this.setState({ aircrafts: value });
  }
  handleErrorMessage(value) {
    this.setState({ errormessage: value });
  }
  render() {
    return (
      <div className="App">
        <div class="background-container">
          <h1>Air Traffic Control System</h1>
          <AircraftList
            handleAircraft={this.handleAircraftList}
            handleErrorMessage={this.handleErrorMessage}
            aircrafts={this.state.aircrafts}
            errormessage={this.state.errormessage}
          />
          <AddAircraft
            handleAircraft={this.handleAircraftList}
            handleErrorMessage={this.handleErrorMessage}
            errormessage={this.state.errormessage}
          />
          <DequeueAircraft
            handleAircraft={this.handleAircraftList}
            handleErrorMessage={this.handleErrorMessage}
            errormessage={this.state.errormessage}
          />
        </div>
      </div>
    );
  }
}
