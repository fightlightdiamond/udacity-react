import React, { useRef} from "react";
import {Button, Label, TextInput} from "flowbite-react";
import {useAppDispatch} from "../../../common/hooks";
import {saveQuestion} from "../store/pollsAPI";
import {useTypedSelector} from "../../../app/stores";
import {selectAuth} from "../../auth/store/authSlice";
import {useNavigate} from "react-router";

const NewPoll: React.FC = () => {
    const dispatch = useAppDispatch()
    const title = useRef<HTMLInputElement>(null)
    const option1 = useRef<HTMLInputElement>(null)
    const option2 = useRef<HTMLInputElement>(null)
    const auth = useTypedSelector(selectAuth);
    let navigate = useNavigate();

    const onHandleSubmit = (e: React.FormEvent) => {
        if(!auth || !option1.current!.value || !option2.current!.value) {
            alert('Pls check and retry again')
            return
        }
        e.preventDefault();
        dispatch(saveQuestion({
            authorId: auth?.id,
            title: title.current!.value,
            option1: option1.current!.value,
            option2: option2.current!.value,
        }))
        navigate('/')
    }

    return <section className={'container mx-auto flex flex-col gap-10'}>
        <div className={'text-center'}>
            <h1 className={'text-2xl font-bold leading-10'}>Would you rather</h1>
            <h2 className={'text-sm font-medium leading-6 text-gray-500'}>Create your own poll</h2>
        </div>
        <form onSubmit={onHandleSubmit} className="flex flex-col gap-4 w-full">
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="base" value="Title"/>
                </div>
                <TextInput ref={title} id="base" type="text" sizing="md"/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="base" value="First option"/>
                </div>
                <TextInput ref={option1} id="base" type="text" sizing="md"/>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="base" value="Second option"/>
                </div>
                <TextInput ref={option2} id="base" type="text" sizing="md"/>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    </section>
}

export default NewPoll