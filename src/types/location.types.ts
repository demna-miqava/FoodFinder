export interface LatLngLocation {
  lat: number;
  lng: number;
}

export interface Location {
  geometry: {
    location: LatLngLocation;
    viewport: {
      northeast: LatLngLocation;
      southwest: LatLngLocation;
    };
  };
}

export interface LocationResults {
  results: Location[];
}
