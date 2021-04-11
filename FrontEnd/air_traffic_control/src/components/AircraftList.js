import React from "react";

import axios from "axios";

export default class AircraftList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios
      .get(`http://localhost:9090/api/aircrafts`)
      .then((res) => {
        const aircrafts = res.data;
        this.props.handleAircraft(aircrafts);
      })
      .catch((err) => {
        this.props.handleErrorMessage(
          "System Exception, Please contact the adminstrator"
        );
        console.log(err);
      });
  }

  render() {
    if (this.props.aircrafts.length > 0) {
      return (
        <div>
          <ul>
            {this.props.aircrafts.map((aircraft) => (
              <li>
                <p>{aircraft.type} </p> <p>{aircraft.size}</p>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <h3>No Aircrafts</h3>;
    }
  }
}
