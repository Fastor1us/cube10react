import React from 'react';

import Game1 from '../../components/Game1/Game1';
import Game2 from '../../components/Game2/Game2';
import Page404 from '../Page404/Page404';
import { useParams } from 'react-router-dom';


export default function GamesPage() {
  const { gameId } = useParams();
  return (
    <>
      {gameId === '1' && <Game1 />}
      {gameId === '2' && <Game2 />}
      {!/^(1|2)$/.test(gameId) && <Page404 />}
    </>
  );
}
