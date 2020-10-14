import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';
import { PageMap } from '../styles/pages/orphanages-map.js';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [48, 58],
    iconAnchor: [24, 58],
    popupAnchor: [150, 2]
})

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
                <Marker
                    icon={mapIcon}
                    position={[-15.6159384, -56.1253854]}
                >
                    <Popup closeButton={false} minWidth={200} maxWidth={200} className="map-popup">
                        Lar das Marias
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>
        </PageMap>
    )
}

export default OrphanagesMap;
