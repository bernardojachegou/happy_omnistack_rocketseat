import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { PageLanding, ContentWrapper } from '../styles/pages/landing.js';
import logoImg from '../images/logo.svg';

function Landing() {
    return (
        <PageLanding>
            <ContentWrapper>
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Cuiabá</strong>
                    <span>Mato Grosso</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link>
            </ContentWrapper>
        </PageLanding>
    )
}

export default Landing;