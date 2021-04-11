import React from "react";
import Modal from "./Modal";
import axios from "axios";
export default class AddAircraft extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      aircraftId: "",
      aircraftType: "EMERGENCY",
      aircraftSize: "SMALL",
    };

    this.handleAircraftTypeChange = this.handleAircraftTypeChange.bind(this);
    this.handleAircraftSizeChange = this.handleAircraftSizeChange.bind(this);
  }

  handleAircraftTypeChange(e) {
    this.setState({ aircraftType: e.target.value });
  }
  handleAircraftSizeChange(e) {
    this.setState({ aircraftSize: e.target.value });
  }
  handleAircraftIdChange(e) {
    this.setState({ aircraftId: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const aircraft = {
      id: this.state.aircraftId,
      type: this.state.aircraftType,
      size: this.state.aircraftSize,
    };
    console.log(aircraft);
    axios
      .post(`http://localhost:9090/api/aircrafts`, aircraft)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.props.handleAircraft(res.data);
      })
      .catch((err) => {
        this.props.handleErrorMessage(
          "System Exception, Please contact the adminstrator"
        );

        console.log(err);
      });

    this.modalClose();
  }

  modalOpen() {
    this.props.handleErrorMessage(" ");
    this.setState({ modal: true });
  }

  modalClose() {
    this.props.handleErrorMessage(" ");
    this.setState({
      modalInputName: "",
      modal: false,
    });
  }

  render() {
    return (
      <div>
        <button class="addButton" onClick={(e) => this.modalOpen(e)}>
          Enqueue Aircraft
        </button>

        <Modal show={this.state.modal} handleClose={(e) => this.modalClose(e)}>
          <div className="form-group">
            <select
              value={this.state.aircraftType}
              className="form-control form-control-lg"
              name="aircraftType"
              onChange={this.handleAircraftTypeChange}
            >
              <option value="EMERGENCY">Emergency</option>
              <option value="VIP">VIP</option>
              <option value="PASSENGER">Passenger</option>
              <option value="CARGO">Cargo</option>
            </select>
          </div>
          <div className="form-group">
            <select
              value={this.state.aircraftSize}
              className="form-control form-control-lg"
              name="aircraftSize"
              onChange={this.handleAircraftSizeChange}
            >
              <option value="SMALL">Small</option>
              <option value="LARGE">Large</option>
            </select>
          </div>
          <div className="form-group">
            <button onClick={(e) => this.handleSubmit(e)} type="button">
              Save
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}
