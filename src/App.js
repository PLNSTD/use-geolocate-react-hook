import { useState } from "react";
import { useGeolocation } from "./useGeolocation";

// "I am using OpenStreetMap location"

function App() {
  const [countClicks, setCountClicks] = useState(0);

  const { userLocation, isLoading, error, getPosition } = useGeolocation();

  function handleCountClick() {
    setCountClicks((count) => count + 1);
    getPosition();
  }

  return (
    <div className="App">
      <button onClick={handleCountClick} disabled={isLoading}>
        Get my position
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userLocation && !isLoading && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${userLocation.latitude}/${userLocation.longitude}`}
          >
            {userLocation.latitude}, {userLocation.longitude}
          </a>
        </p>
      )}
      <p>You requested position {countClicks} times</p>
    </div>
  );
}

export default App;
