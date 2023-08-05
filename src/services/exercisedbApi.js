// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const exercisedbApi = createApi({
    //for caching
    reducerPath: 'exercisedbApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://exercisedb.p.rapidapi.com/',

        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", '98d18c6eabmsha0f9a858831d495p12d918jsn5b49419c4b35')
            headers.set("X-RapidAPI-Host", 'exercisedb.p.rapidapi.com')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getExercises: builder.query({

            query: () => `exercises`,

        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExercisesQuery } = exercisedbApi