import { TUserLocation } from '../../interfaces';
import { PlacesState } from '../../interfaces/places';

type placesAction = { type: 'setUserLocation'; payload: TUserLocation };

export const placesReducer = (
  state: PlacesState,
  action: placesAction
): PlacesState => {
  switch (action.type) {
    case 'setUserLocation':
      return {
        ...state,
        isLoading: false,
        userLocation: action.payload,
      };

    default:
      return state;
  }
};
