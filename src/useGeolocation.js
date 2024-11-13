import { useState } from "react";

export function useGeolocation() {
  const [userLocation, setUserLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function getPosition() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        setIsLoading(false);
      },
      (error) => {
        setError("User denied Geolocation");
        setIsLoading(false);
      }
    );
  }

  return { userLocation, isLoading, error, getPosition };
}
