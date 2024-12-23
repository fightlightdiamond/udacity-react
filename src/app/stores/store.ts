import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit'
// import loggerMiddleware from "./middlewares/loggerMiddleware";
import {thunk} from 'redux-thunk';
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {rootReducer} from "./reducers";

export function setupStore(preloadedState?: Partial<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
        middleware: (getDefaultMiddleware: any) => getDefaultMiddleware()
            .concat(thunk)
            // .concat(loggerMiddleware),
    })
}

// export const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware: any) => getDefaultMiddleware()
//         .concat(thunk)
//         .concat(loggerMiddleware),
// })

export const store = setupStore();

// Infer the `RootState`,  `AppDispatch`, and `App Store` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']
export type AppStore = ReturnType<typeof setupStore>
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
export const useTypedSelector: TypedUseSelectorHook<
    RootState
> = useSelector;

// export default store;