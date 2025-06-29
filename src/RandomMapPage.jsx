// Datei: src/RandomMapPage.jsx
import { MapContainer, TileLayer, Marker, useMap, ScaleControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

function getRandomLatLng() {
  // Zufällige Koordinaten weltweit
  const lat = (Math.random() * 180 - 90).toFixed(5);   // -90 bis +90
  const lng = (Math.random() * 360 - 180).toFixed(5);  // -180 bis +180
  return [parseFloat(lat), parseFloat(lng)];
}

// Hilfskomponente, um die Karte zu verschieben und Zoom zu setzen
function ChangeMapView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default function RandomMapPage() {
  const DEFAULT_ZOOM = 13;
  const [position, setPosition] = useState(getRandomLatLng());
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  const handleClick = () => {
    setPosition(getRandomLatLng());
    setZoom(DEFAULT_ZOOM); // Zoom zurücksetzen
  };

  return (
    <div className="random-image-container">
      <h2>Karten-Generator</h2>
      <button className="modernButton" onClick={handleClick}>Jetzt starten</button>
      <h2></h2>
      <MapContainer center={position} zoom={zoom} style={{ height: "500px", width: "75%" }}>
        <ChangeMapView center={position} zoom={zoom} />
        <TileLayer
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
          attribution='Kartendaten: &copy; OpenStreetMap-Mitwirkende, Tiles: &copy; OpenStreetMap Deutschland'
        />
        <Marker position={position} />
        <ScaleControl position="bottomright" />
      </MapContainer>
    </div>
  );
}