import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Mapa = () => {
  const position = [-43.25566963850785, -65.30424715991353]; // Coordenadas de tu ubicación (latitud, longitud)
  

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
      <Marker position={position}>
        <Popup>¡Estamos acá! Visítanos en nuestra ubicación.</Popup>
      </Marker>
    </MapContainer>
  );
};
