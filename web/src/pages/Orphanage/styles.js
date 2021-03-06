import styled from 'styled-components';

export const PageOrphanage = styled.div`
  display: flex;
  min-height: 100vh;
}

main {
  flex: 1;
}

.orphanage-details {
  width: 700px;
  margin: 64px auto;

  background: #FFFFFF;
  border: 1px solid #9f9d68;
  border-radius: 20px;

  overflow: hidden;
}

.orphanage-details > img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.orphanage-details .images {
  display: grid;
  grid-template-columns: repeat(6 ,1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
}
 
.orphanage-details .images button {
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;
  
  opacity: 0.6;
}

.orphanage-details .images button.active {
  opacity: 1;
}

.orphanage-details .images button img {
  width: 100%;
  height: 88px;
  object-fit: cover;
  
}

.orphanage-details .orphanage-details-content {
  padding: 80px;
}

.orphanage-details .orphanage-details-content h1 {
  color: #87689f;
  font-size: 54px;
  line-height: 54px;
  margin-bottom: 8px;
}

.orphanage-details .orphanage-details-content p {
  line-height: 28px;
  color: #87689f;
  margin-top: 24px;
}

.orphanage-details .orphanage-details-content .map-container {
  margin-top: 64px;
  background: #E3DB94;
  border: 1px solid #9f9d68;
  border-radius: 20px;
}

.orphanage-details .orphanage-details-content .map-container footer {
  padding: 20px 0;
  text-align: center;
}

.orphanage-details .orphanage-details-content .map-container footer a {
  line-height: 24px;
  color: #FFFFFF;
  text-decoration: none;
}

.orphanage-details .orphanage-details-content .map-container .leaflet-container {
  border-bottom: 1px solid #DDE3F0;
  border-radius: 20px;
}

.orphanage-details .orphanage-details-content hr {
  width: 100%;
  height: 1px;
  border: 0;
  background: #9f9d68;
  margin: 64px 0;
}

.orphanage-details .orphanage-details-content h2 {
  font-size: 36px;
  line-height: 46px;
  color: #87689f;
}

.orphanage-details .orphanage-details-content .open-details {
  margin-top: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
}

.orphanage-details .orphanage-details-content .open-details div {
  padding: 32px 24px;
  border-radius: 20px;
  line-height: 28px;
}

.orphanage-details .orphanage-details-content .open-details div svg {
  display: block;
  margin-bottom: 20px;
}

.orphanage-details .orphanage-details-content .open-details div.hour {
  background-color: #f9f2ff;
  border: 1px solid #87689f;
  color: #87689f;
}


.orphanage-details .orphanage-details-content .open-details div.open-on-weekends {
  background-color: #fffff5;
  border: 1px solid #9f9d68;
  color: #9f9d68;
}

.orphanage-details .orphanage-details-content .open-details div.open-on-weekends.not-oppening-on-weekends {
  background: linear-gradient(154.16deg, #FDF0F5 7.85%, #FFFFFF 91.03%);
  border: 1px solid #FFBCD4;
  color: #FF6690;
}

.orphanage-details .orphanage-details-content button.contact-button {
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #C194E3;
  border-radius: 20px;
  color: #FFFFFF;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;
}

.orphanage-details .orphanage-details-content button.contact-button svg {
  margin-right: 16px;
}

.orphanage-details .orphanage-details-content button.contact-button:hover {
  background: #87689f;
}

`;
