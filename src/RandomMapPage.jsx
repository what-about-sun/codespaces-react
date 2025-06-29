// Datei: src/RandomMapPage.jsx
import { MapContainer, TileLayer, Marker, useMap, ScaleControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

function getRandomLatLng() {
  // Zufällige Koordinaten (z.B. auf der Erde)
  const lat = (Math.random() * 180 - 90).toFixed(5);
  const lng = (Math.random() * 360 - 180).toFixed(5);
  return [parseFloat(lat), parseFloat(lng)];
}

// Hilfskomponente, um die Karte zu verschieben
function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

export default function RandomMapPage() {
  const [position, setPosition] = useState(getRandomLatLng());

  return (
    <div className="random-image-container">
      <h2>Karten-Generator</h2>
      <button className="modernButton" onClick={() => setPosition(getRandomLatLng())}>Jetzt starten</button>
      <h2></h2>
      <MapContainer center={position} zoom={13} style={{ height: "500px", width: "85%" }}>
        <ChangeMapView center={position} />
        <TileLayer
          url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          attribution='Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap (CC-BY-SA)'
        />
        <Marker position={position} />
        <ScaleControl position="bottomright" />
      </MapContainer>
    </div>
  );
}