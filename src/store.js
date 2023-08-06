import { configureStore } from '@reduxjs/toolkit'
import { exercisedbApi } from './services/exercisedbApi'
import { recipeApi } from './services/recipeApi'

export default configureStore({
    reducer: {
        // Add the generated reducer as a specific top-level slice
        [exercisedbApi.reducerPath]: exercisedbApi.reducer,
        [recipeApi.reducerPath]: recipeApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(exercisedbApi.middleware,
            recipeApi.middleware),

})


