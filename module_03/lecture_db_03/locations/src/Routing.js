import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";

export default function Routing({ map, position, target }) {
  const leafletElement = L.Routing.control({
    waypoints: [
      L.latLng(position[0], position[1]),
      L.latLng(target[0], target[1]),
    ],
    router: new L.Routing.Google(),
  }).addTo(map);

  return leafletElement.getPlan();;
}