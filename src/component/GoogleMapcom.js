import React, { useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "80%",
  height: "400px",
  maxWidth: "1100px",
};

const center = {
  lat: 22.520039261798022,
  lng: 88.38308769624192,
}; 



const markerPositions = [
  {
    name: "Kolkata",
    location: { lat: 22.520039261798022, lng: 88.38308769624192 },
    description: "Description for Kolkata ",
  },
    { name: 'mumbai', location: { lat: 19.0760, lng: 72.8777 },
    description: "Description for Kolkata Experience the future of transportation at your fingertips! With the Drivershaab app officially launched, seamless rides and ", },
  { name: 'pune', location: { lat: 18.516726, lng: 73.856255 } ,
  description: "Description for Kolkata ",},
  { name: 'delhi', location: { lat: 28.7041, lng: 77.1025 },
    description: "Description for Kolkata ", },
  { name: 'bangalore', location: { lat: 12.971599, lng: 77.594566 } ,
    description: "Description for Kolkata ",},
  { name: 'jaipur', location: { lat: 26.922070, lng: 75.778885 } ,
    description: "Description for Kolkata ",},
  { name: 'chandigarh ', location: { lat: 30.7333, lng: 76.7794 } ,
    description: "Description for Kolkata ",},
  { name: 'kanpur ', location: { lat: 26.449923, lng: 80.331871 } ,
    description: "Description for Kolkata ",},
  { name: 'Lucknow', location: { lat: 26.850000, lng: 80.949997} ,
    description: "Description for Kolkata ",},
  { name: 'Hyderabad ', location: { lat: 17.366, lng: 78.476 },
    description: "Description for Kolkata ", },
  { name: 'Chennai ', location: { lat: 13.0827, lng: 80.2707 } ,
    description: "Description for Kolkata ",},
  { name: 'Cuttack', location: { lat: 20.4625, lng: 85.8830 } ,
    description: "Description for Kolkata ",},
  { name: 'Aurangabad', location: { lat: 19.8762, lng: 75.3433 } ,
    description: "Description for Kolkata ",},
];

function GoogleMapcom() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCssyaTuZvyZjC0GlASxCdD5CYtnn4SFvk",
  });

  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const onMarkerClick = (marker) => {
    setActiveMarker(marker);
    map.setZoom(10); // Adjust zoom level as needed
    map.panTo(marker.location);
  };

  const onCloseClick = () => {
    setActiveMarker(null);
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4.5}
      defaultZoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markerPositions.map((position, index) => {
        return (
          <Marker
            key={index}
            position={position.location}
            onClick={() => onMarkerClick(position)}
          >
            {/* {activeMarker === position && (
              <InfoWindow onCloseClick={onCloseClick}>
                <div>
                  <h3>{position.name}</h3>
                  <p>{position.description}</p>
                </div>
              </InfoWindow>
            )} */}
          </Marker>
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapcom);
