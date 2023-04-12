// vendors
import React, { useEffect, useRef } from 'react';
// Fix transpilation issue with mapbox-gl
// https://docs.mapbox.com/mapbox-gl-js/guides/install/#excluding-mapbox-gl-js-explicitly-from-transpilation
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import mapboxgl from '!mapbox-gl';

// images
import unicornMarker from '../../images/vectorUnicorn.svg';
import targetMarker from '../../images/vectorTarget.svg';

const MAPBOX_TOKEN = process.env.GATSBY_MAPBOX_ACCESS_TOKEN;

const defaultOptions = {
  style: 'mapbox://styles/qc-num/ckz7b0xxl002e14th30urqx2w',
  center: { lat: 46.81425, lng: -71.211725 },
  zoom: 13,
};

const markers = [
  {
    coordinates: [-71.200621, 46.816714],
    icon: unicornMarker,
    iconSize: [29, 28],
  },
  {
    coordinates: [-71.223837, 46.812047],
    icon: targetMarker,
    iconSize: [28, 28],
  },
];

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      accessToken: MAPBOX_TOKEN,
      ...defaultOptions,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    markers.forEach((marker) => {
      const el = document.createElement('div');
      const width = marker.iconSize[0];
      const height = marker.iconSize[1];

      el.style.backgroundImage = `url(${marker.icon})`;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      el.style.backgroundSize = 'cover';

      new mapboxgl.Marker(el).setLngLat(marker.coordinates).addTo(map.current);
    });
  }, []);

  const style = {
    width: '100%',
    height: '100%',
    minHeight: '100%',
  };

  return <div style={style} ref={mapContainer} />;
};

export default Map;
