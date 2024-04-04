import { Map, Marker } from "mapbox-gl";

export interface MapState {
  isMapReady: boolean;
  map?: Map;
  markers: Marker[];
}

