import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { PageLanding, ContentWrapper } from './styles';
import darkLogoImg from '../../images/darkLogo.svg';


function Landing() {
    return (
        <PageLanding>
            <ContentWrapper>
                <img src={darkLogoImg} alt="Happy" />
                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <div className="location">
                    <strong>Cuiabá</strong>
                    <span>Mato Grosso</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="white" />
                </Link>
            </ContentWrapper>
        </PageLanding>
    )
}

export default Landing;