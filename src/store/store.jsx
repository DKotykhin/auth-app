import { configureStore } from '@reduxjs/toolkit';

import user from 'components/userSlice';


export const store = configureStore({
  reducer: { user },
});
