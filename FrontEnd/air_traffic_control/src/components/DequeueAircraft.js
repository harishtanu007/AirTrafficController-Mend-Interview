import React from "react";
import Modal from "./Modal";
import axios from "axios";
export default class DequeueAircraft extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .delete(`http://localhost:9090/api/aircrafts`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        this.props.handleAircraft(res.data.aircrafts);
        if (res.data.message != "") {
          this.props.handleErrorMessage("No Aircrafts to be removed");
        }
      })
      .catch((err) => {
        this.props.handleErrorMessage(
          "System Exception, Please contact the adminstrator"
        );
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <button onClick={(e) => this.handleSubmit(e)} type="button">
            Dequeue Aircraft
          </button>
        </div>
        <h2>{this.props.errormessage}</h2>
      </div>
    );
  }
}
