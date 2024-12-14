import React, {useRef} from "react";
import {Button, Label, TextInput} from "flowbite-react";

type NewTodoProps = {
    onAddTodo: (enteredText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;

        props.onAddTodo(enteredText)
    }

    return <form className={'flex flex-col gap-4'} onSubmit={todoSubmitHandler}>
        <div className={'flex flex-col gap-1'}>
            <Label htmlFor="">Todo Text</Label>
            <TextInput ref={textInputRef} type="text" placeholder={'enter task...'}/>
        </div>
        <Button type={'submit'} color={'blue'}>Add Todo</Button>
    </form>
}

export default NewTodo