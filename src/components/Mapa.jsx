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
  const position = [-43.25566963850785, -65.30424715991353]; // Tu posición

  return (
    <section className="flex flex-col items-center justify-center py-12 bg-gray-100">
      {/* Título y descripción */}
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Encuéntranos</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">
        Visítanos en nuestra ubicación para conocer más sobre nuestros productos
        y servicios. Usa el mapa interactivo para encontrarnos fácilmente.
      </p>

      {/* Mapa y contenedor estilizado */}
      <div className="w-full max-w-4xl h-96 shadow-lg rounded-lg overflow-hidden">
        <MapContainer
          center={position}
          zoom={17}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>¡Acá estamos! Visítanos en nuestra ubicación.</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Botones debajo del mapa */}
      <div className="mt-8 space-x-4">
        <a
          href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-oransh text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition-colors"
        >
          Ver en Google Maps
        </a>
      </div>
    </section>
  );
};
