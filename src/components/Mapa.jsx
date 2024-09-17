import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



import customMarkerIcon from "../assets/images/logo.png"; 

const customIcon = L.icon({
  iconUrl: customMarkerIcon,
  iconSize: [32, 32], 
  iconAnchor: [19, 30], 
  popupAnchor: [0, -38], 
});

export const Mapa = () => {
  const position = [-43.25566963850785, -65.30424715991353]; // 

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>¡Acá estamos! Visítanos en nuestra ubicación.</Popup>
      </Marker>
    </MapContainer>
  );
};

