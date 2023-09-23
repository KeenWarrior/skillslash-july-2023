import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Geolocation } from "@capacitor/geolocation";
import { useEffect, useState } from "react";
import ReactLeafletGoogleLayer from 'react-leaflet-google-layer';

export default function MapComponent() {
  const [position, setPosition] = useState(null);
  const target = [12.9895412, 77.7255266];

  useEffect(() => {
    setInterval(() => {
      Geolocation.getCurrentPosition().then((pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
      });
    }, 5000);
  }, []);

  if (!position) return <h1>Location not available yet</h1>;
  return (
    <>
      <MapContainer
        center={position}
        zoom={18}
        scrollWheelZoom={false}
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <ReactLeafletGoogleLayer apiKey="" type={"roadmap"} />
        {/* <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
