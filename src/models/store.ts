import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from './models'
 
import storage from "redux-persist/lib/storage";
import persistPlugin from "@rematch/persist";
const persistConfig = {
  key: "root",
  storage,
};

export const store = init({
	models,
  plugins: [persistPlugin(persistConfig)],
})
 
export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>