import * as React from 'react';
import styles from './MapBase.module.scss';
import { MapContainer, Marker, Popup, ImageOverlay } from 'react-leaflet';
import { LatLng, LatLngBounds } from 'leaflet';
import L from 'leaflet';
import map from '../../assets/AscentMap.svg';
import marker from '../../assets/ReconDartMarker.svg';
import FitBoundsManager from './FitBoundsManager';

export default function MapBase() {
  const bounds = new LatLngBounds([0, 0], [1000, 1000]);
  const center = new LatLng(500, 500);
  const markerIcon = L.icon({
    iconUrl: marker,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

  return (
    <div>
      <MapContainer
        className={styles.mapContainer}
        scrollWheelZoom={true}
        bounds={bounds}
        center={center}
        crs={L.CRS.Simple}
        minZoom={-3}
        zoomSnap={0.1}
        maxBounds={bounds}
      >
        <ImageOverlay url={map} bounds={bounds}>
          <Marker position={[405, 269]} icon={markerIcon}>
            <Popup>
              0,0 <br />
            </Popup>
          </Marker>
          <Marker position={[1000, 1000]}>
            <Popup>1000,1000</Popup>
          </Marker>
          <Marker position={center}>
            <Popup>{center.toString()} Center</Popup>
          </Marker>
        </ImageOverlay>
        <FitBoundsManager />
      </MapContainer>
    </div>
  );
}
