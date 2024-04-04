import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';
import { DEFAULT_ZOOM } from '../consts';

export const BtnMyLocation = () => {
  const { userLocation } = useContext(PlacesContext);
  const { map, isMapReady } = useContext(MapContext);

  const onClick = () => {
    if (!isMapReady) throw new Error('Cargando Mapa');
    if (!userLocation) throw new Error('No hay ubicacion del usuario');

    map?.flyTo({
      zoom: DEFAULT_ZOOM,
      center: userLocation,
    });
  };

  return (
    <button
      onClick={onClick}
      className="btn btn-primary"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
      }}
    >
      Centrar
    </button>
  );
};
