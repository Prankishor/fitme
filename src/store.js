import { configureStore } from '@reduxjs/toolkit'
import { exercisedbApi } from './services/exercisedbApi'
import { shoesApi } from './services/shoesApi'
import cartReducer, { getTotals } from './features/cartSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const store = configureStore({
    reducer: {
        //Adding reducers for state management
        cart: cartReducer,
        // Add the generated reducer as a specific top-level slice
        [exercisedbApi.reducerPath]: exercisedbApi.reducer,
        [shoesApi.reducerPath]: shoesApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(exercisedbApi.middleware,
            shoesApi.middleware),

})

setupListeners(store.dispatch)
store.dispatch(getTotals())

export default store


