import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

// !==============RTK Query==============
// import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/query';
// import { contactsApi } from './rtkQuery/contactsSlice';

// export const store = configureStore({
//   reducer: {
//     [contactsApi.reducerPath]: contactsApi.reducer,
//   },
//   middleware: getDefaultMiddleware => [
//     ...getDefaultMiddleware(),
//     contactsApi.middleware,
//   ],
// });

// setupListeners(store.dispatch);
// !=====================================
