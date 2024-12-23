import {createAsyncThunk} from "@reduxjs/toolkit";
import {TodosError} from "./types";

export const deleteTodo = createAsyncThunk<
    string,
    string,
    { rejectValue: TodosError }
>(
    "todos/delete",
    async (todoId: string, thunkApi) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${todoId}`,
            { method: "DELETE" }
        );

        if (response.status !== 200) {
            return thunkApi.rejectWithValue({
                message: "Failed to delete todo."
            });
        }

        // Return the ID of the deleted todo
        return todoId;
    }
);
