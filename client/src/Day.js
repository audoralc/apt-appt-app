import React, { Component } from "react";

class Day extends Component {
  handleHourBooking = event => {
    console.log("ya clicked");
  };

  render() {
    const hours = [
      { time: "09:00", twelveHourTime: "9:00am", active: 0 },
      { time: "10:00", active: 0 },
      { time: "11:00", active: 0 },
      { time: "12:00", active: 0 },
      { time: "13:00", active: 0 },
      { time: "14:00", active: 0 },
      { time: "15:00", active: 0 },
      { time: "16:00", active: 0 },
      { time: "17:00", active: 0 }
    ];

    const hour = hours[0];
    const hoursList = hours.map(hour => (
      <div
        className="dayHourBlock"
        key={hour.time}
        onClick={this.handleHourBooking}
      >
        <p> {hour.time} </p>
      </div>
    ));

    return (
      <div className="dayContainer">
        <h3> {this.props.name} </h3>
        <div className="dayHoursContainer"> {hoursList} </div>
      </div>
    );
  }
}

export default Day;
