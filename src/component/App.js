import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";
//Klucz do API
const APIKey = "d8cba5a186435a276c00515423084236";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false
  };
  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  // handleOnSubmit = e => {
  //   e.preventDefault();
  //   const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;
  //   fetch(API)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw Error("Nie udało się ");
  //     })
  //     .then(result => {
  //       const time = new Date().toLocaleString();
  //       this.setState(prevState => ({
  //         date: time,
  //         city: prevState.value,
  //         sunrise: result.sys.sunrise,
  //         sunset: result.sys.sunset,
  //         temp: result.main.temp,
  //         pressure: result.main.pressure,
  //         wind: result.wind.speed,
  //         err: false
  //       }));
  //     })
  //     .catch(err => {
  //       this.setState(state => {
  //         return {
  //           err: true,
  //           city: state.value
  //         };
  //       });
  //     });
  // };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value.length === 0) return;

    if (prevState.value !== this.state.value) {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;
      fetch(API)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw Error("Nie udało się ");
        })
        .then(result => {
          const time = new Date().toLocaleString();
          this.setState(prevState => ({
            date: time,
            city: prevState.value,
            sunrise: result.sys.sunrise,
            sunset: result.sys.sunset,
            temp: result.main.temp,
            pressure: result.main.pressure,
            wind: result.wind.speed,
            err: false
          }));
        })
        .catch(err => {
          this.setState(state => {
            return {
              err: true,
              city: state.value
            };
          });
        });
    }
  }
  render() {
    return (
      <div className="app">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          // submit={this.handleOnSubmit}
        />{" "}
        <Result weather={this.state} />{" "}
      </div>
    );
  }
}

export default App;
