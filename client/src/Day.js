import React, { Component, createPortal } from "react";
import ReactDOM from "react-dom";
import { ApptContext } from "./App";
import Modal from "./Modal";

class Hour extends Component {
  state = {
    showModal: false,
    appointments: [this.props.appointments]
  };

  openModal = () => {
    this.setState({ showModal: true });
    console.log(this.state);
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="hourBlock" onClick={this.openModal}>
        {this.props.time}

        {/* so we've got an hour with an onClick that flips showModal state to true */}
        {this.state.showModal &&
          ReactDOM.createPortal(
            <Modal
              day={this.props.dayName}
              time={this.props.time}
              //data={whatever existing IF an edit}
            />,
            document.getElementById("modalRoot")
          )}
      </div>
    );
  }
}

class Day extends Component {
  state = {
    hours: [
      { time: "09:00am", active: 0 },
      { time: "10:00am", active: 0 },
      { time: "11:00am", active: 0 },
      { time: "12:00pm", active: 0 },
      { time: "1:00pm", active: 0 },
      { time: "2:00pm", active: 0 },
      { time: "3:00pm", active: 0 },
      { time: "4:00pm", active: 0 },
      { time: "5:00pm", active: 0 }
    ]
  };

  render() {
    return (
      <div className="dayContainer">
        <h3> {this.props.name} </h3>
        <ApptContext.Consumer>
          {/* can only return one elment tho! so wrap in 
          // for Modal onClick={context.addNewBook} */}
          {context => (
            <React.Fragment>
              <div
                className="dayHoursContainer"
                appointments={context.state.appointments.map(appointment => {
                  return {
                    day: appointment.day,
                    time: appointment.time
                  };
                })}
              >
                {this.state.hours.map(
                  hour => {
                    /* if (
                    this.props.appointments[0].day == this.props.name &&
                    this.props.appointments[0].time == hour.time
                  ) {*/

                    return (
                      <Hour
                        className="bookedHourBlock"
                        key={`${this.props.name}, ${hour.time}`}
                        time={hour.time}
                        dayName={this.props.name}
                      />
                    );
                  } /* else {
                    return (
                      <Hour
                        className="bookedHourBlock"
                        key={`${this.props.name}, ${hour.time}`}
                        time={hour.time}
                        dayName={this.props.name}
                      />
                    );
                  } 
                }*/
                )}
              </div>
            </React.Fragment>
          )}
        </ApptContext.Consumer>
      </div>
    );
  }
}

export default Day;
