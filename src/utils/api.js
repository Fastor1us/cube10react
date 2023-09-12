import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'http://localhost:30001/'

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: build => ({
    fetchGamesData: build.query({
      query: () => 'gamesData'
    }),
  })
})
