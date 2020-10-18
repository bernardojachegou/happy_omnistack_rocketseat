import styled from 'styled-components';

export const AppSidebar = styled.aside`
   position: fixed;
   height: 100%;
   padding: 32px 24px;
   background: ${({ theme }) => theme.secondaryBackgroundColor};
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   transition: all 0.25s linear;

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





