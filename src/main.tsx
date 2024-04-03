import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp.tsx';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZWR3YXJkMjU1MyIsImEiOiJjbHVqODdmbGUwZGQwMmpvMmtwM2VkMzA4In0.VtelFyg8iqyh3HN_iaVtDQ';

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
