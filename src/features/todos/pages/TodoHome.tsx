import React from "react";
import {faker} from "@faker-js/faker";
import NewTodo from "../../../common/components/NewTodo";
import TodoList from "../../../common/components/TodoList";
import {useTypedSelector} from "../../../app/stores";
import {useAppDispatch} from "../../../common/hooks";
import {selectError, selectStatus, selectTodos} from "../todosSlice";
import {fetchTodos} from "../fetchTodos";
import {Button} from "flowbite-react";
import {addTodo} from "../addTodo";
import {deleteTodo} from "../deleteTodo";
import ShowStatus from "../../../common/components/ShowStatus";

const TodoHome: React.FC = () => {
    const todos = useTypedSelector(selectTodos);
    const dispatch = useAppDispatch()
    const status = useTypedSelector(selectStatus);
    const error = useTypedSelector(selectError);
    const handleClick = () => dispatch(fetchTodos(1));

    const todoAddHandler = (title: string) => {
        dispatch(
            addTodo({
                title,
                completed: false,
                id: faker.number.int({min: 0, max: 9999}).toString()
            })
        );
    }

    const todoDeleteHandler = (todoId: string) => {
        dispatch(deleteTodo(todoId));
    }

    return <section className={'container mx-auto flex flex-col gap-10'}>
        <div className='flex flex-col gap-8'>
            <h2>Todo</h2>
            <ShowStatus status={status} error={error} />
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList ondDelTodo={todoDeleteHandler} items={todos  ?? []}/>
            <Button type="button" onClick={handleClick}>
                {status === "loading"
                ? "Loading todos..."
                : "Load todos"}
            </Button>
        </div>
    </section>
}

export default TodoHome