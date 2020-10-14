import Leaflet from 'leaflet'

import mapMarkerImg from '../images/map-marker.svg';

const happyMapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [48, 58],
    iconAnchor: [24, 58],
    popupAnchor: [0, -60]
})

export default happyMapIcon;