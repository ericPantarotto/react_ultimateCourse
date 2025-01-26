import './App.css';
import Input from './components/Input';
import Weather from './components/Weather';
import { useGeolocation } from './hooks/useGeolocation.js';
import { useLocalStorageState } from './hooks/useLocalStorageState.js';

function App() {
  const [location, setLocation] = useLocalStorageState('', 'location');

  function onSetLocation(loc) {
    setLocation(loc);
  }

  const { isLoading, displayLocation, weather } = useGeolocation(location);

  return (
    <div className='app'>
      <h1>Classy Weather</h1>
      <Input location={location} onChangeLocation={onSetLocation} />

      {isLoading && <p className='loader'>Loading...</p>}

      {weather.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </div>
  );
}

export default App;
