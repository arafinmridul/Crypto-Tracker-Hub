// here redux stores entire application's state
import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoApi";

export default configureStore({
    reducer: {
        // Add api reducer
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    // Adding middleware
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
});
