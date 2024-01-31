import { MapOptions } from "./google";
export interface coords {
  lat: number;
  lng: number;
}
export interface markerObject {
  position: coords;
  icon?: string;
  draggable?: boolean;
  markerStyles?: string;
}

export interface AdvancedMapsProps {
  apiKey: string;
  mapOptions: MapOptions;
  markers?: markerObject[];
  markerIcon?: string;
  markersStyles?: string;
  markersDraggable?: boolean;
  clusterStyles?: string;
  clustered?: boolean;
  showInfoWindows?: boolean;
  infoWindowFields?: string[];
  infoWindowStyles?: string;
}
