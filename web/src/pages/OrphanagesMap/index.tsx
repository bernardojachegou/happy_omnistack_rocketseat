import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';
import { PageMap } from './styles';
import mapIcon from '../../utils/mapIcon';
import api from '../../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  // Map zoom feature;
  const defaultPosition = { latitude: -15.6159384, longitude: -56.1253854 };
  const [mapZoom, setMapZoom] = useState(15);
  const [mapPosition, setMapPosition] = useState({
    latitude: defaultPosition.latitude,
    longitude: defaultPosition.longitude,
  });

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

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
        center={[mapPosition.latitude, mapPosition.longitude]}
        zoom={mapZoom}
        style={{ width: '100%', height: '100%' }}
        onClick={() => {
          setMapZoom(15);
          setMapPosition({
            latitude: defaultPosition.latitude,
            longitude: defaultPosition.longitude,
          });
        }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              key={orphanage.id}
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              onClick={() => {
                setMapZoom(20);
                setMapPosition({
                  latitude: orphanage.latitude,
                  longitude: orphanage.longitude,
                });
              }}
            >
              <Popup
                closeButton={false}
                minWidth={200}
                maxWidth={200}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <Link to="/login" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </PageMap>
  );
}

export default OrphanagesMap;
