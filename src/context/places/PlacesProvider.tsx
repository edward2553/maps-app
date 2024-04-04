import React, { useEffect, useReducer } from 'react';
import { INITIAL_STATE } from '../../consts';
import { getUserLocation } from '../../helpers';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';
import { searchApi } from '../../apis';
import { Feature, IPlacesResponse } from '../../interfaces';

export const PlacesProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  const onSearchPlacesByTerm = async (query: string): Promise<Feature[]> => {
    if (query.length === 0) return []; // TODO: Limpiar state
    if (!state.userLocation) throw new Error('No hay ubicacion del usuario');

    dispatch({ type: 'setLoadingPLaces' });

    const resp = await searchApi.get<IPlacesResponse>(`/${query}.json`, {
      params: {
        proximity: `${state.userLocation.lat},${state.userLocation.lat}`,
      },
    });

    dispatch({ type: 'setPlaces', payload: resp.data.features });

    return resp.data.features;
  };

  useEffect(() => {
    getUserLocation()
      .then((userCoords) => {
        dispatch({ type: 'setUserLocation', payload: userCoords });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <PlacesContext.Provider
      value={{
        ...state,
        onSearchPlacesByTerm,
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
