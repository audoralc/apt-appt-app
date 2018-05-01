import React, { Component } from "react";
import Day from "./Day";

class DaysDash extends Component {
  state = {
    days: [
      { id: 1, name: "Monday" },
      { id: 2, name: "Tuesday" },
      { id: 3, name: "Wednesday" },
      { id: 4, name: "Thursday" },
      { id: 5, name: "Friday" }
    ]
  };

  render() {
    return (
      <div className="daysDashContainer">
        {this.state.days.map((day, name) => {
          return <Day key={day.id} name={day.name} />;
        })}
      </div>
    );
  }
}

export default DaysDash;
