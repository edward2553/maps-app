import React, { useEffect, useReducer } from 'react';
import { INITIAL_STATE } from '../../consts';
import { getUserLocation } from '../../helpers';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';

export const PlacesProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

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
      }}
    >
      {children}
    </PlacesContext.Provider>
  );
};
