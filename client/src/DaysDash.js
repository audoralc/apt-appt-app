import React, { Component } from "react";
import Day from "./Day";

class DaysDash extends Component {
  render() {
    const days = [
      { id: 1, name: "Monday" },
      { id: 2, name: "Tuesday" },
      { id: 3, name: "Wednesday" },
      { id: 4, name: "Thursday" },
      { id: 5, name: "Friday" }
    ];

    const day = days[0];

    const daysList = days.map(day => (
      <Day id={day.id} key={day.id} name={day.name} />
    ));

    return <div className="daysDashContainer">{daysList}</div>;
  }
}

export default DaysDash;
