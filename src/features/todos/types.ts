// feature/todos/types.ts

export type TodoId = string;

export type Todo = {
    id: TodoId;
    title: string;
    completed: boolean;
};

export type TodosState = {
    // In `status` we will watch
    // if todos are being loaded.
    status: "loading" | "idle" | "failed" | "succeeded";

    // `error` will contain an error message.
    error: string | null;
    list: Todo[];
};

export type TodosError = {
    message: string;
};