import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { MARGIN_MEDIUM } from "../utils/Constants";
import marketicon from "../assets/marker_icon.svg"

function Map({ localData }) {
  const [map, setMap] = useState(null);
  const [data] = useState(localData);

  useEffect(() => {
    const loadScript = (src) => {
      const tag = document.createElement("script");
      tag.src = src;
      tag.async = true;
      document.body.appendChild(tag);

        /* eslint-disable no-new */
      return new Promise((resolve) => {
        tag.onload = () => {
          resolve();
        };
      });
    };

    loadScript(
      ``,
    ).then(() => {
      const initMap = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const currentLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              setMap(
                /* eslint-disable no-new */
                new window.google.maps.Map(document.getElementById("map"), {
                  zoom: 8,
                  center: currentLocation,
                }),
              );
            },
            (error) => {
              console.error(error);
            },
          );
        } else {
          console.error("Geolocation is not supported by this browser.");
        }
      };
      initMap();
    });
  }, []);

  useEffect(() => {
    if (map) {
      data.forEach((item) => {
        if (typeof item.longitude !== "number") {
          console.error("Longitude must be a number");
          return;
        }
        const location = { lat: item.latitude, lng: item.longitude };

        /* eslint-disable no-new */
        new window.google.maps.Marker({
            position: location,
            map: map,
            icon: { url: marketicon, scale: 7 },
          });
      });
    }
  }, [map, data]);

  return (
    <div
      id="map"
      style={{
        marginTop: `${MARGIN_MEDIUM}px`,
        height: "500px",
        width: "100%",
      }}
    />
  );
}

Map.propTypes = {
    localData: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          location_status: PropTypes.string,
          workflow_status: PropTypes.string,
          from: PropTypes.string,
          to: PropTypes.string,
          customer_address: PropTypes.string,
          due_date: PropTypes.string,
        }),
      ).isRequired,
};

export default Map;
