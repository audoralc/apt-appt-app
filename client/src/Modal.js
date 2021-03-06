import React, { Component } from "react";

//how propogate update to parent? does regular event bubble apply?
//push changes to API
//validation?

class Modal extends Component {
  //conditional render
  //response good = fire closeModal & re-render Hours
  // bad response = on pg alert

  /*  handleApptSubmit = () => {
    fetch("localhost:5000/book", { method: "GET", 
    body: '' })
      .then(response => response.json())
  }
  
  //same good= closeModal bad = alert

  handleApptCancel = () => {
    fetch("localhost:5000/cancel/this.props.match.params.id", { method: "GET" })
      .then(response => response.json())
      .then(json => {
        this.setState({
          test: json.express
        });
      });
  }
*/

  render() {
    return (
      <div id="modalPortal">
        <div className="modalForm">
          <button id="modalExit" onClick={this.props.closeModal}>
            X
          </button>
          <h3>
            Appointment for {this.props.day} {this.props.time}
          </h3>
          <div className="modalFormField">
            <label htmlFor="" className="modalFormBlock">
              Name
              <input className="modalInput" type="text" />
            </label>
            <label htmlFor="" className="modalFormBlock">
              Phone
              <input className="modalInput" type="text" />
            </label>
            <button
              id="modalSubmit"
              className="modalButton"
              onClick={this.handleApptSubmit}
            >
              Submit
            </button>
            <button
              id="modalCancel"
              className="modalButton"
              onClick={this.handleApptCancel}
            >
              Cancel Appointment?
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
