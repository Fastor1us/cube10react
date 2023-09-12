import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import AppLayout from './components/AppLayout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import GamesPage from './pages/GamesPage/GamesPage';
import Page404 from './pages/Page404/Page404';

import { setGamesData } from './store/slicers/gamesDataSlicer';
import { api } from './utils/api';


function App() {
  const dispatch = useDispatch();
  const { data, isLoading, isError, isSuccess } = api.endpoints.fetchGamesData.useQuery();
  useEffect(() => {
    dispatch(setGamesData({ data, isLoading, isError, isSuccess }));
  }, [isLoading]);
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='game/:gameId' element={<GamesPage />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
