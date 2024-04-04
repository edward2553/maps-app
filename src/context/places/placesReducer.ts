import { TUserLocation } from '../../interfaces';
import { Feature, PlacesState } from '../../interfaces/places';

type placesAction =
  | { type: 'setUserLocation'; payload: TUserLocation }
  | { type: 'setPlaces'; payload: Feature[] }
  |  { type: 'setLoadingPLaces' };

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
      case 'setLoadingPLaces': 
        return {
          ...state,
          isLoadingPlaces: true,
          places: []
        };
      case 'setPlaces':
        return {
          ...state,
          isLoadingPlaces: false,
          places : action.payload,
        };

    default:
      return state;
  }
};
