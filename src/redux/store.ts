import { configureStore } from "@reduxjs/toolkit"
// ...
import adminAuthSlice from "./slices/adminAuth.slice"

export const store = configureStore({
  reducer: {
    adminAuthSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store it'self
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
