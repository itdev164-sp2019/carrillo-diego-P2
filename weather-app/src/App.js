import React, { Component } from 'react';
import Layout from './components/Layout';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const APIKey = "e06c60caa646bec9768fa32ed136c7b5";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const APIcall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${APIKey}`);

    const data = await APIcall.json();
    console.log(data);
  }
  constructor(props) {
    super(props);

    this.state = {
      title: "Weather Tracker",
    Ftitle: "DCarr-Media"
    };
  }
  render() {
    return (
      <div className="App">
     <Layout title={this.state.title} />
     <Form getWeather={this.getWeather} />
     </div>
    );
  }
}

export default App;

