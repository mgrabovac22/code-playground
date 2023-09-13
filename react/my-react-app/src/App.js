import React, { useEffect, useState } from 'react';
import './App.css';

async function getData(url = "") {
  const response = await fetch(url, {
    headers: {
      "Accept": "application/json",
    }, 
  });
  const data = await response.json();
  return data.value;
}



function App() {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    getData("http://devices.webofthings.io/pi/sensors/temperature/")
      .then((data) => {
        setTemperature(data);
      })
      .catch((error) => {
        console.error("Failed to fetch temperature data:", error);
      });
  }, []);

  useEffect(() => {
    getData("http://devices.webofthings.io/pi/sensors/humidity/")
      .then((data) => {
        setHumidity(data);
      })
      .catch((error) => {
        console.error("Failed to fetch humidity data:", error);
      });
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
      </header>
      <main>
        <div id="temperature">
          {temperature !== null ? (
            `Temperature: ${temperature} °C`
          ) : (
            "Fetching temperature data..."
          )}
        </div>
        <div id="humidity">
          {humidity !== null ? (
            `humidity: ${humidity} %`
          ) : (
            "Fetching humidity data..."
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
