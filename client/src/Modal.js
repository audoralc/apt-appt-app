import React, { Component } from "react";

//how propogate update to parent? does regular event bubble apply?
//push changes to API
//validation?

class Modal extends Component {
  render() {
    return (
      <div id="modalPortal">
        {/* OnClick that dismisses modal - may have to put on other comp? */}
        {/* onClick={this.handleCloseModal()}> */}
        <div className="modalForm">
          <p id="modalExit">X</p>
          <h3>Appointment for {/* whatever day & time */} </h3>
          <div className="modalFormField">
            <label htmlFor="" className="modalFormBlock">
              Name
              <input className="modalInput" type="text" />
            </label>
            <label htmlFor="" className="modalFormBlock">
              Phone
              <input className="modalInput" type="text" />
            </label>
            <button id="modalSubmit" className="modalButton">
              Submit
            </button>
            <button id="modalCancel" className="modalButton">
              Cancel Appointment?
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
