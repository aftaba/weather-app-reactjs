import React, { Component } from 'react';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Reports from './components/Reports';

const API_KEY = "c2c4575208a059d41b2110ca0353baaa";

class App extends Component {
  state = {
    city : undefined,
    country : undefined,
    temperature : undefined,
    error : undefined
  }

  getWeather = async( e ) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if (  city && country ) {
      const api_url = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric` );
      const data = await api_url.json();
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        error : "Please enter city & country"
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Titles />
        <Forms getWeather={this.getWeather} />
        <Reports 
          temperature={this.state.temperature} 
          city={this.state.city}
          country={this.state.country}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
