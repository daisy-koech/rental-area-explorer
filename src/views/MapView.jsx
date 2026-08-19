import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapView.css";

function MapView({ location }) {
  if (!location) {
    return (
      <div className="map-view">
        <h1>Map</h1>
        <p>Search for an area first.</p>
      </div>
    );
  }

  const position = [location.latitude, location.longitude];

  return (
    <div className="map-view">
      <h1>Map</h1>

      <p className="map-location-name">
        {location.areaName}
      </p>

      <div className="map-container">
        <MapContainer
          center={position}
          zoom={14}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={position}>
            <Popup>
              {location.areaName}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default MapView;
