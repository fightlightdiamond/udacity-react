import React, {useEffect, useState} from "react";
import {faker} from "@faker-js/faker";
import {ITodo} from "../../interfaces";
import NewTodo from "../../components/NewTodo";
import TodoList from "../../components/TodoList";
import {store} from "../../stores";
import {addGoalAction, addTodoAction, removeGoalAction, removeTodoAction} from "../../stores/actions";

const HomeTodo: React.FC = () => {
    useEffect(() => {
        // store.dispatch(addTodoAction({
        //     id: 0,
        //     name: 'Learn Redux',
        //     complete: false
        // }))
        //
        // store.dispatch(addTodoAction({
        //     id: 1,
        //     name: 'Learn React',
        //     complete: false
        // }))
        //
        // store.dispatch(removeTodoAction(1));
        // store.dispatch(addGoalAction({
        //     id: 1,
        //     name: 'Learn React',
        //     complete: false
        // }))
        // store.dispatch(addGoalAction({
        //     id: 2,
        //     name: 'Learn React',
        //     complete: false
        // }))
        //
        // store.dispatch(removeGoalAction(1))

    }, []);


    // const todosInit = [
    //     {id: 1, name: 'Finish the course', complete: false}
    // ]

    const [todos, setTodos] = useState<ITodo[]>([])


    const todoAddHandler = (name: string) => {
        // setTodos([...todos, {name, id: faker.number.int({min: 0, max: 9999}), complete: false}])
        store.dispatch(
            addTodoAction({
                name,
                complete: false,
                id: faker.number.int({min: 0, max: 9999})
            })
        );

        const states = store.getState();
        setTodos(states.todos)
    }

    const todoDeleteHandler = (todoId: number) => {
        store.dispatch(removeTodoAction(todoId));
        // setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))

        const states = store.getState();
        setTodos(states.todos)
    }

    return <section className={'container mx-auto flex flex-col gap-10'}>
        <div className='flex flex-col gap-8'>
            <h2>Todo</h2>
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList ondDelTodo={todoDeleteHandler} items={todos  ?? []}/>
        </div>
        {/*<div className='flex flex-col gap-4'>*/}
        {/*    <h2>Goal</h2>*/}
        {/*    <NewTodo onAddTodo={todoAddHandler}/>*/}
        {/*    <TodoList ondDelTodo={todoDeleteHandler} items={todos}/>*/}
        {/*</div>*/}

    </section>
}

export default HomeTodo