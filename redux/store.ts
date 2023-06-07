import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./service/api.slice";
import { useDispatch } from "react-redux";
import { rootReducer } from "./root-reducer";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

const middlewares = [apiSlice.middleware];

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

setupListeners(store.dispatch);
