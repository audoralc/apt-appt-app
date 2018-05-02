import React, { Component } from "react";
import { ApptContext } from "./App";

class Hour extends Component {
  handleModal = event => {
    //this.setState({showModal: true});
    console.log("modal activated!");
  };
  render() {
    return (
      <div className="hourBlock" onClick={this.handleModal}>
        {this.props.name}
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
    ],
    showModal: false
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
              <div className="dayHoursContainer">
                {this.state.hours.map((hour, active) => {
                  return (
                    <Hour
                      key={`${this.props.name}, ${hour.time}`}
                      name={hour.time}
                    />
                  );
                })}
              </div>
            </React.Fragment>
          )}
        </ApptContext.Consumer>

        {/* so we've got an hour with an onClick that flips showModal state to true 
         
        {this.state.showModal && React.createPortal(
          <Modal day={} time={} data={whatever existing IF an edit}> </Modal>, document.getElementById('modalPortal')
        )}*/}
      </div>
    );
  }
}

export default Day;
