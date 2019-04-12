import React, { Component } from 'react';
import Layout from './components/Layout';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';

const APIKey = "e06c60caa646bec9768fa32ed136c7b5"; 
//API key created for open weather 

class App extends Component {
 constructor(props) {
    super(props);

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      icon: undefined,
      date: undefined,
      currentWeather: undefined,
      maxWeather: undefined,
      minWeather: undefined,

      title: "Weather Tracker",
    Ftitle: "DCarr-Media"
    };
  }


  getForecast = async (e) => {
    e.preventDefault();
  //prevent the home page from re freshing when form is submitted 

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const APIcall = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${APIKey}`);
    
    //modified API call by inserting city and country
    
    const data = await APIcall.json();
    this.setState({
      city: data.city.name,
      country: data.city.country,
      description: data.list[0].weather.description,
      icon: data.list[0].weather.icon,
      date: data.list[0].dt_txt,
      currentWeather: data.list[0].main.temp,
      maxWeather: data.list[0].main.temp_max,
      minWeather: data.list[0].main.temp_min
    })
    console.log(data);
  }
 
  render() {
    return (
      <div className="App">
     <Layout title={this.state.title} />
     <Form getForecast={this.getForecast} />
     </div>
    );
  }//Form calls getWeather Function
}

export default App;

