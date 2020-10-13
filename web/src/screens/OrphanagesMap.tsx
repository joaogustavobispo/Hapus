import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { Map, TileLayer } from "react-leaflet";

import "../Styles/pages/OrphanagesMap.css";

import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../img/map-marker.svg";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="map-marker" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Escolha um orfanato no mapa</p>
        </header>

        <footer>
          <strong>Vitória</strong>
          <span>Espirito Santo</span>
        </footer>
      </aside>

      <Map
        center={[-20.2804704, -40.3394844]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
