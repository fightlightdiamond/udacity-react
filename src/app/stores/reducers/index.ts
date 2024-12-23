import {combineReducers} from "@reduxjs/toolkit";
import todosReducer from "../../../features/todos/todosSlice";
import usersReducer from "../../../features/users/usersSlice";
import pollsReducer from "../../../features/polls/store/pollSlice";
import authReducer from "../../../features/auth/store/authSlice";

export * from './todo.reducer'
export * from './goal.reducer'

export const rootReducer = combineReducers({
    todos: todosReducer,
    users: usersReducer,
    polls: pollsReducer,
    auth: authReducer,
});