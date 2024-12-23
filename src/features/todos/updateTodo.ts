import {Todo, TodosError} from "./types";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const updateTodo = createAsyncThunk<
    Todo,
    Todo,
    { rejectValue: TodosError }
>(
    "todos/update",
    async (updatedTodo: Todo, thunkApi) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedTodo)
            }
        );

        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to update todo."
            });
        }

        const data: Todo = await response.json();
        return data;
    }
);
