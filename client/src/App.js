import React, { Component } from "react";
import "./App.css";
import DaysDash from "./DaysDash";
//import Modal from "./Modal";

export const ApptContext = React.createContext();

class ApptProvider extends Component {
  state = {
    appointments: []
  };

  //fetch appointments

  render() {
    return (
      <ApptContext.Provider
        value={{
          //state: this.state,
          //forModal
          addNewBook: () =>
            this.setState({
              appointments: []
            })
        }}
      >
        {this.props.children}
      </ApptContext.Provider>
    );
  }
}

class App extends Component {
  state = {
    //appointments: [],
    test: ""
  };

  componentWillMount() {
    //this.getBookedAppts();
    //this.getTesterApi();
    console.log(this.state);
  }

  /* getBookedAppts = () => {
    fetch("localhost:5000/api/appts", { method: "GET" })
      .then(response => response.json())
      .then(json => {
        this.setState({
          appointments: json.appointments
        });
      });
  };

  getTesterApi = () => {
    fetch("localhost:5000/hello", { method: "GET" })
      .then(response => response.json())
      .then(json => {
        this.setState({
          test: json.express
        });
      });
  };
*/

  //when context is passed down gonna have to use React.forwardRef

  render() {
    return (
      <ApptProvider>
        <div className="App">
          <div>
            <div className="headerContainer">
              <h1> Apt ⏲ </h1>
              <h2> an appointment app</h2>
            </div>
            <DaysDash />
          </div>
        </div>

        {/* <Modal /> */}
      </ApptProvider>
    );
  }
}

export default App;
