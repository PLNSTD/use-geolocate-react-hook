import { useState } from "react";

// "I am using OpenStreetMap location"

function App() {
  const [countClicks, setCountClicks] = useState(0);
  const [userLocation, setUserLocation] = useState(null);
  const [error, setError] = useState(null);

  function handleCountClick() {
    setCountClicks((c) => c + 1);
    getUserLocation();
  }

  function getUserLocation() {
    if (navigator.geolocation) {
      // console.log("Allowed Geolocation");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          setError("User denied Geolocation");
        }
      );
    } else {
      console.log("Geolocation NOT SUPPORTED");
    }
  }

  return (
    <div className="App">
      <button onClick={handleCountClick}>Get my position</button>
      {error && <p>{error}</p>}
      {userLocation && (
        <p>
          Your GPS position: {userLocation.latitude}, {userLocation.longitude}
        </p>
      )}
      <p>You requested position {countClicks} times</p>
    </div>
  );
}

export default App;
