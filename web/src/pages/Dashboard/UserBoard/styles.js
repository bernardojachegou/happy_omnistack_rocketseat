import styled from 'styled-components';

export const BoardWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const BoardTitleBg = styled.div`
  margin: 20px auto;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #9f9d68;

  h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.userBoardTextColor};
    font-weight: 700;
  }

  span {
    font-size: 16px;
    color: ${({ theme }) => theme.userBoardTextColor};
    font-weight: 600;
  }
`;

export const BoardOrphanagesBg = styled.div``;

export const OrphanageBox = styled.div``;
