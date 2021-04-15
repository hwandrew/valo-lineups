import * as React from 'react';
import { useMap } from 'react-leaflet';
import { LatLngBounds } from 'leaflet';

export default function FitBoundsManager() {
  const map = useMap();

  const fitBounds = React.useCallback(() => {
    const bounds = new LatLngBounds([0, 0], [1000, 1000]);
    map.setMinZoom(-100);
    map.fitBounds(bounds);
    map.setMinZoom(map.getZoom());
  }, [map]);
  React.useEffect(() => {
    window.addEventListener('resize', fitBounds);
    fitBounds();
  });

  return null;
}
