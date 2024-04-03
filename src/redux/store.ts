// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage';


// import searchSlice from './features/search-slice';


// const persistConfig = {
//   key:'root',
//   storage:AsyncStorage,
//   version:1,
//   blacklist:['search','products']
// }


// const rootReducer = combineReducers({
//   search:searchSlice,
// })

// const persistedReducer = persistReducer(persistConfig,rootReducer)

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware:(getDefaultMiddleware) => getDefaultMiddleware({
//     serializableCheck:false
//   }),
// })