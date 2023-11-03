// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const shoesApi = createApi({
    //for caching
    reducerPath: 'shoesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shoes-collections.p.rapidapi.com/',

        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", '98d18c6eabmsha0f9a858831d495p12d918jsn5b49419c4b35')
            headers.set("X-RapidAPI-Host", 'shoes-collections.p.rapidapi.com')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getShoes: builder.query({
            query: () => `shoes`,

        }),
        getShoesById: builder.query({
            query: (id) => `shoes/${id}`,
        }),
    }),
})

export const { useGetShoesQuery, useGetShoesByIdQuery } = shoesApi