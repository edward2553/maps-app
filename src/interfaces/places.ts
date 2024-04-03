export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: {lat: number, lng: number};
}

export interface PlacesState {
  isLoading: boolean;
  userLocation?: {lat: number, lng: number};
}
