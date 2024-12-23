import {createAsyncThunk} from "@reduxjs/toolkit";
import {Todo, TodosError} from "./types";

export const addTodo = createAsyncThunk<
    Todo,
    Todo,
    { rejectValue: TodosError }
>(
    "todos/add",
    async (newTodo: Todo, thunkApi) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTodo)
            }
        );

        if (response.status !== 201) {
            return thunkApi.rejectWithValue({
                message: "Failed to add todo."
            });
        }

        const data: Todo = await response.json();
        return data;
    }
);
