import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../../images/map-marker.svg';
import { AppSidebar } from './styles.js';

export default function Sidebar() {
    const { goBack } = useHistory();

    return (
        <AppSidebar>
            <img src={mapMarkerImg} alt="Happy" />

            <footer>
                <button type="button" onClick={goBack}>
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
            </footer>
        </AppSidebar>
    );
}
