import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';
import { PageMap } from '../styles/pages/orphanages-map.js';

function OrphanagesMap() {
    return (
        <PageMap>
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :D </p>
                </header>

                <footer>
                    <strong>Cuiabá</strong>
                    <span>Mato Grosso</span>
                </footer>
            </aside>

            <Map
                center={[-15.6159384, -56.1253854]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </PageMap>
    )
}

export default OrphanagesMap;
