import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { location: 'lisbon' };
    this.fetchWeather = this.fetchWeather.bind(this);
  }
  fetchWeather() { 
    console.log('fetching weather for', this.state.location);
  }
  
  render() {
    return (
      <div className='app'>
        <h1>Classy Weather</h1>
        <input
          type='text'
          placeholder='Search from a location...'
          value={this.state.location}
          onChange={(e) => this.setState({ location: e.target.value })}
        />
        <button onClick={this.fetchWeather}>Get Weather</button>
      </div>
    );
  }
}

export default App;
