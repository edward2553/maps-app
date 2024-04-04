import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp.tsx';

import mapboxgl from 'mapbox-gl';
import { ACCESS_TOKEN } from './consts';

mapboxgl.accessToken = ACCESS_TOKEN;

if (!navigator.geolocation) {
  const navigationLocationError =
    'Tu navegador no tiene opcion de geolocalización';
  alert(navigationLocationError);
  throw new Error(navigationLocationError);
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
