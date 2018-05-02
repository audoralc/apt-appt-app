import React, { Component } from "react";

class Day extends Component {
  state = {
    hours: [
      { time: "09:00", twelveHourTime: "9:00am", active: 0 },
      { time: "10:00", active: 0 },
      { time: "11:00", active: 0 },
      { time: "12:00", active: 0 },
      { time: "13:00", active: 0 },
      { time: "14:00", active: 0 },
      { time: "15:00", active: 0 },
      { time: "16:00", active: 0 },
      { time: "17:00", active: 0 }
    ],
    showModal: false
  };

  render() {
    return (
      <div className="dayContainer">
        <h3> {this.props.name} </h3>
        {/* <ApptContext.Consumer>
          // can only return one elment tho! so wrap in 
          <React.Fragment>
            {(context) => (
            {context.state.whatever}
          )}
          // for Modal onClick={context.addNewBook}
          </React.Fragment>        
        </ApptContext.Consumer> */}
        <div className="dayHoursContainer">
          {/* so we've got an hour with an onClick that flips showModal state to true 
        {this.state.showModal && React.createPortal(
          <Modal day={} time={} data={whatever existing IF an edit}> </Modal>, document.getElementById('modalPortal')
        )}*/}
        </div>
      </div>
    );
  }
}

export default Day;
