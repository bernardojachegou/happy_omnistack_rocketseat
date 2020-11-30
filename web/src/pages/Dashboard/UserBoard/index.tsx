import React from 'react';
import AppSidebar from '../../../components/AppSidebar/index';
import {
  BoardOrphanagesBg,
  BoardTitleBg,
  BoardWrapper,
  OrphanageBox,
} from './styles';

export default function UserBoard() {
  return (
    <BoardWrapper>
      <AppSidebar />
      <BoardTitleBg>
        <h1>Orfanatos Cadastrados</h1>
        <span>02 Orfanatos</span>
      </BoardTitleBg>
      <BoardOrphanagesBg>
        <OrphanageBox> </OrphanageBox>
      </BoardOrphanagesBg>
    </BoardWrapper>
  );
}
