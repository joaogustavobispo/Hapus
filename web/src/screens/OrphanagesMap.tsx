import React from "react";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import "../Styles/pages/OrphanagesMap.css"

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

      <div></div>

      <Link to="" className="creat-orphanage">
        <FiPlus />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
