import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import customMarkerIcon from "/images/logo.png";
import mapIcon from "../assets/icons/map.png";
import phoneIcon from "../assets/icons/phone.png";

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

export const Mapa = () => {
  const position = [-43.25561963850785, -65.30424715991353];

  return (
    <div className="p-7 md:px-28">
      <div className="text-center">
        <h1 className="my-10 max-w-2xl mx-auto text-4xl xl:text-6xl font-custom tracking-tight leading-none text-oransh">
          ¿Dónde Estamos?
        </h1>
      </div>
      <section className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
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

        <div className="text-center pl-1">
          <p className="text-lg text-gray-600 mb-8 flex items-center justify-center gap-2">
            <img src={mapIcon} alt="Map icon" className="w-6 h-6" />
            <span>Paraguay 55, Trelew</span>
          </p>
          <p className="text-lg text-gray-600 mb-4 flex items-center justify-center gap-2">
            <img src={phoneIcon} alt="Phone icon" className="w-6 h-6" />
            <span id="phone-number"> 2804 38 5269</span>
          </p>
        </div>
      </section>

      <div className="mt-8 space-x-4 text-center">
        <a
          href={`https://www.google.com/maps?q=${position[0]},${position[1]}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition-colors"
        >
          Ver en Google Maps
        </a>
      </div>
    </div>
  );
};
