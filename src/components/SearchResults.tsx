import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { Feature } from '../interfaces';
import { DEFAULT_ZOOM } from '../consts';

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRoutesBetweenPoints } = useContext(MapContext);
  const [activeResult, setActiveResult] = useState('');

  const onPlaceClicked = (place: Feature) => {
    const [lat, lng] = place.center;
    map?.flyTo({
      zoom: DEFAULT_ZOOM,
      center: [lat, lng],
    });
    setActiveResult(place.id);
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;

    const { lat, lng } = userLocation;
    const [endLng, endLat] = place.center;

    getRoutesBetweenPoints([lng, lat], [endLng, endLat]);
  };

  if (isLoadingPlaces) {
    return (
      <div className="alert alert-primary">
        <h6>Buscando</h6>
        <p>Espere por favor...</p>
      </div>
    );
  }

  if (places.length === 0) return <></>;

  return (
    <ul className="list-group mt-2">
      {places.map((place) => (
        <li
          key={place.id}
          onClick={() => onPlaceClicked(place)}
          className={`list-group-item list-group-item-action ${
            activeResult === place.id ? 'active' : ''
          }`}
        >
          <h6>{place.text_es}</h6>
          <p className="text-muted" style={{ fontSize: '12px' }}>
            {place.place_name}
          </p>
          <button
            onClick={() => getRoute(place)}
            className={`btn btn-sm ${
              activeResult === place.id
                ? 'btn-outline-light'
                : 'btn-outline-primary'
            }`}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};
