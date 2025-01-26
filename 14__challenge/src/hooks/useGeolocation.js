import { useEffect, useState } from 'react';
import { convertToFlag } from '../utils/formatters.js';

export function useGeolocation( location ) {
  const [isLoading, setIsLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(
    function () {
      const controller = new AbortController();

      if (location.length < 3) {
        setWeather({});
        return;
      }
      const waitFetch = setTimeout(async function fetchLocation() {
        setIsLoading(true);

        try {
          // 1) Getting location (geocoding)
          const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}`,
            { signal: controller.signal }
          );
          const geoData = await geoRes.json();
          console.log(geoData);
          if (!geoData.results) throw new Error('Location not found');

          const { latitude, longitude, timezone, name, country_code } =
            geoData.results.at(0);

          setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

          const weatherRes = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
          );
          const weatherData = await weatherRes.json();

          setWeather(weatherData.daily);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }, 1000);

      return function () {
        controller.abort();
        clearTimeout(waitFetch);
      };
    },
    [location]
  );

  return { isLoading, displayLocation, weather };
}
