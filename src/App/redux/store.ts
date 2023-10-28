import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { authApi } from "./auth/auth";
import { setupListeners } from "@reduxjs/toolkit/query";
import { tokenReducer } from "./auth/taskSlice";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, tokenReducer),
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({serializableCheck: false}),
    authApi.middleware,
  ],
});
setupListeners(store.dispatch)
export const persistor = persistStore(store)