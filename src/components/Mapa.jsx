import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customMarkerIcon from "../assets/images/logo.png";

const customIcon = L.divIcon({
  html: `<div style="
    background-image: url(${customMarkerIcon});
    background-size: cover;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid #fff;">
  </div>`,
  iconSize: [32, 32],
  className: "custom-icon",
});

customIcon.className = "hover:bg-red-400";

export const Mapa = () => {
  const position = [-43.25561963850785, -65.30424715991353];

  return (
    <div className="bg-gray-100 p-7">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Encontranos</h2>
    <section className="flex  items-center justify-center gap-2 p-7 ">
    

     
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
      </div>
      <div>
        <p className="text-lg text-gray-600 mb-8 text-center ">
          Visítanos en <span> Paraguay 55, Trelew</span>
        </p>
      </div>

    </section>
    </div>

  );
};
