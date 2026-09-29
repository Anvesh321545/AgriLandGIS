import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <MapContainer
      center={[16.9891, 81.7844]}
      zoom={13}
      style={{
        height: "380px",
        width: "100%",
      }}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={[16.9891, 81.7844]}>
        <Popup>
          <strong>Survey Area</strong>
          <br />
          Rajahmundry Rural
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;