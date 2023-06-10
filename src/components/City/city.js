import React, { useEffect, useState } from 'react';
// import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from '@maptiler/sdk';

export default function City() {

      const [searchQuery, setSearchQuery] = useState('');
      const [isWithinBounds, setIsWithinBounds] = useState(null);
    
      useEffect(() => {
        maptilersdk.config.apiKey = 'KEY';
        const map = new maptilersdk.Map({
          container: 'map', // container's id or the HTML element to render the map
          style: maptilersdk.MapStyle.STREETS,
          center: [16.62662018, 49.2125578], // starting position [lng, lat]
          zoom: 14, // starting zoom
        });
        map.on('load', () => {
          map.addSource('search-results', {
            type: 'geojson',
            data: {
              "type": "FeatureCollection",
              "features": []
            }
          });
          map.addLayer({
            'id': 'point-result',
            'type': 'circle',
            'source': 'search-results',
            'paint': {
              'circle-radius': 8,
              'circle-color': '#B42222',
              'circle-opacity': 0.5
            },
            'filter': ['==', '$type', 'Point']
          });
        });
    
        const handleSearch = () => {
          if (searchQuery) {
            maptilersdk.geocoding.forward(searchQuery)
              .then(results => {
                map.getSource('search-results').setData(results);
                if (results.features[0]) {
                  const { lng, lat } = results.features[0].geometry.coordinates;
                  map.fitBounds(results.features[0].bbox, { maxZoom: 19 });
    
                  // Check if the searched location falls within Vancouver boundaries
                  const vancouverBounds = {
                    west: -123.2654,
                    east: -123.0236,
                    north: 49.3049,
                    south: 49.1996
                  };
                  if (
                    lng >= vancouverBounds.west &&
                    lng <= vancouverBounds.east &&
                    lat >= vancouverBounds.south &&
                    lat <= vancouverBounds.north
                  ) {
                    setIsWithinBounds(true);
                  } else {
                    setIsWithinBounds(false);
                  }
                }
              })
              .catch(error => {
                console.log('Error:', error);
              });
          }
        };
    
        handleSearch(); // Initial search with the provided query
    
      }, [searchQuery]);
    
      const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
      };
    
      return (
        <>
          <div>
            <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search a place..." />
            {isWithinBounds !== null && (
              <p>
                {isWithinBounds
                  ? 'The searched location is within Vancouver boundaries.'
                  : 'The searched location is outside Vancouver boundaries.'}
              </p>
            )}
          </div>
          <div id="map"></div>
          <script src="https://cdn.maptiler.com/maptiler-sdk-js/latest/maptiler-sdk.umd.min.js"></script>
          <link href="https://cdn.maptiler.com/maptiler-sdk-js/latest/maptiler-sdk.css" rel="stylesheet" />
          <style>
            {`
              body { margin: 0; padding: 0; }
              #map { position: absolute; top: 0; bottom: 0; width: 100%; }
            `}
          </style>
        </>
      );

}
