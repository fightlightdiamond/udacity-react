import {TodosState} from "./types";
import {RootState} from "../../app/stores";
import {fetchTodos} from "./fetchTodos";
import {createSlice} from "@reduxjs/toolkit";
import {deleteTodo} from "./deleteTodo";
import {updateTodo} from "./updateTodo";
import {addTodo} from "./addTodo";

const initialState: TodosState = {
    list: [],
    error: null,
    status: "idle",
};

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        // addTodo: (state: TodosState, action: PayloadAction<Todo>) => {
        //     state.list = state.list.concat([action.payload])
        //     return state
        // },
        // removeTodo: (state: TodosState, action: PayloadAction<TodoId>) => {
        //     state.list =  state.list.filter((todo) => todo.id !== action.payload)
        //     return state
        // },
        // toggleTodo: (state: TodosState, action: PayloadAction<TodoId>) => {
        //     const index = state.list.findIndex(
        //         ({ id }) => id === action.payload);
        //
        //     if (index) {
        //         state.list[index].completed = !state.list[index].completed;
        //     }
        //     return state
        // },
    },

    // In `extraReducers` we declare
    // all the actions:
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            // At that moment,
            // we change status to `loading`
            // and clear all the previous errors:
            state.status = "loading";
            state.error = null;
        });

        // When a server responses with the data,
        // `fetchTodos.fulfilled` is fired:
        builder.addCase(fetchTodos.fulfilled,
            (state, { payload }) => {
                // We add all the new todos into the state
                // and change `status` back to `idle`:
                state.list.push(...payload);
                state.status = "idle";
            });

        // When a server responses with an error:
        builder.addCase(fetchTodos.rejected,
            (state, { payload }) => {
                // We show the error message
                // and change `status` back to `idle` again.
                // if (payload) state.error = payload.message;
                state.status = "idle";
            });

        // Add Todo
        builder.addCase(addTodo.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(addTodo.fulfilled, (state, { payload }) => {
            state.status = "succeeded";
            state.list.push(payload);
        });
        builder.addCase(addTodo.rejected, (state, { payload }) => {
            state.status = "failed";
            state.error = payload ? payload.message : "Unknown error";
        });

        // Update Todo
        builder.addCase(updateTodo.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(updateTodo.fulfilled, (state, { payload }) => {
            state.status = "succeeded";
            const index = state.list.findIndex((todo) => todo.id === payload.id);
            if (index !== -1) {
                state.list[index] = payload;
            }
        });
        builder.addCase(updateTodo.rejected, (state, { payload }) => {
            state.status = "failed";
            state.error = payload ? payload.message : "Unknown error";
        });

        // Delete Todo
        builder.addCase(deleteTodo.pending, (state) => {
            state.status = "loading";
        });
        builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
            state.status = "succeeded";
            state.list = state.list.filter((todo) => todo.id !== payload);
        });
        builder.addCase(deleteTodo.rejected, (state, { payload }) => {
            state.status = "failed";
            state.error = payload ? payload.message : "Unknown error";
        });
    },
});

export const selectStatus = (state: RootState) =>
    state.todos.status;
export const selectError = (state: RootState) =>
    state.todos.error;
export const selectTodos = (state: RootState) => state.todos.list;
export default todosSlice.reducer;