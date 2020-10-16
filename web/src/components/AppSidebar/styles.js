import styled from 'styled-components';

export const AppSidebar = styled.aside`
   position: fixed;
   height: 100%;
   padding: 32px 24px;
   background: linear-gradient(329.54deg, #9f9d68 0%, #9f9d68 100%);
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;

   img {
      width: 64px;
   }

   footer button {
      width: 64px;
      height: 64px;
      border: 0;
      background: #C194E3;
      border-radius: 16px;
      cursor: pointer;
      transition: background-color 0.2s;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   footer button:hover {
      background: #87689f;
   }
`;





