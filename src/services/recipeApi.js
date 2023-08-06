// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const recipeApi = createApi({
    //for caching
    reducerPath: 'recipeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://edamam-recipe-search.p.rapidapi.com/',

        prepareHeaders: (headers) => {
            headers.set("X-RapidAPI-Key", '98d18c6eabmsha0f9a858831d495p12d918jsn5b49419c4b35')
            headers.set("X-RapidAPI-Host", 'edamam-recipe-search.p.rapidapi.com')
            return headers
        },
    }),
    endpoints: (builder) => ({
        getRecipe: builder.query({
            query: () => ({
                url: `search`,
                params: { q: `chicken` },
            })
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetRecipeQuery } = recipeApi