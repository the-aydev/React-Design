import { useState, useEffect } from "react";
import Geolocation from "./Geolocation";

const GeolocationContainer = () => {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  // When the browser returns the data, we store the result into the state using the following
  // function (place this function before the useEffect Hook):

  const handleSuccess = ({
    coords: {
      latitude,
      longitude
    }
  }: { coords: { latitude: number, longitude: number; }; }) => {
    setLatitude(latitude);
    setLongitude(longitude);
  };

  // Now, we can use the useEffect Hook to fire the request to the APIs:

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess);
    }
  }, []);

  // Finally we show the longitude and latitude values
  return (
    <Geolocation latitude={latitude} longitude={longitude} />
  );
};

export default GeolocationContainer;