import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoHome from "./TodoHome";
import {store} from "../../../app/stores";
import {Provider} from "react-redux";
// import {MemoryRouter} from "react-router";

// Mock các hooks và action
jest.mock("../../../common/hooks", () => ({
    useAppDispatch: jest.fn(),
    useTypedSelector: jest.fn(),
}));
//
// jest.mock("../../stores/features/todos/fetchTodos", () => ({
//     fetchTodos: jest.fn(),
// }));
//
// jest.mock("../../stores/features/todos/addTodo", () => ({
//     addTodo: jest.fn(),
// }));
//
// jest.mock("../../stores/features/todos/deleteTodo", () => ({
//     deleteTodo: jest.fn(),
// }));

test("Renders learn react link", () => {
    const {getByText} = render(
        // <MemoryRouter>
            <Provider store={store}>
                <TodoHome/>
            </Provider>
        // </MemoryRouter>
    )

    expect(getByText('Todo')).toBeInTheDocument()
});
