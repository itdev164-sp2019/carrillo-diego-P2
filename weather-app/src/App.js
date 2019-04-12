import React, { Component } from 'react';
import Layout from './components/Layout';
import Form from './components/Form';
import WeatherForm from './components/WeatherForm';
import './App.css';

const APIKey = "e06c60caa646bec9768fa32ed136c7b5"; 
//API key created for open weather 

class App extends Component {
 constructor(props) {
    super(props);

    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      description: undefined,
      currentWeather: undefined,
      maxWeather: undefined,
      minWeather: undefined,
      humidity: undefined,
      title: "Weather Tracker",
    Ftitle: "DCarr-Media"
    };
  }


  getForecast = async (e) => {
    e.preventDefault();
  //prevent the home page from re freshing when form is submitted 

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const APIcall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKey}&units=imperial`);
    
    //modified API call by inserting city and country
    
    const data = await APIcall.json();
    this.setState({
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      currentWeather: data.main.temp,
      maxWeather: data.main.temp_max,
      minWeather: data.main.temp_min,
      humidity: data.main.humidity
    })
    
    console.log(data);
  }
 
  render() {
    return (
      <div className="App">
     <Layout title={this.state.title} />
     <Form getForecast={this.getForecast} />
     <WeatherForm
    
      city={this.state.city}
      country={this.state.country}
      currentWeather={this.state.currentWeather}
      icon={this.state.icon}
      description={this.state.description}
      maxWeather={this.state.maxWeather}
      minWeather={this.state.minWeather}
      humidity={this.state.humidity}
     />
     </div>
    );
  }//Form calls getWeather Function and gets passed on to weatherForm
}

export default App;

