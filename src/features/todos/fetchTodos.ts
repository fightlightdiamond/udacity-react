// This type describes the error object structure:
import {createAsyncThunk} from "@reduxjs/toolkit";
import {Todo, TodosError} from "./types";

export const fetchTodos = createAsyncThunk<
    Todo[],
    number,
    { rejectValue: TodosError }
>(
    "todos/fetch",
    async (limit: number, thunkApi) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos?limit=${limit}`
        );

        // Check if status is not okay:
        if (response.status !== 200) {
            // Return the error message:
            return thunkApi.rejectWithValue({
                message: "Failed to fetch todos."
            });
        }

        const data: Todo[] = await response.json();
        return data;
    }
);