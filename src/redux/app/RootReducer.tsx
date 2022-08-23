import { combineReducers } from "@reduxjs/toolkit";
import mainReducer from '../features/main/MainReducerSlice'

const rootReducer = combineReducers({
  mainReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer