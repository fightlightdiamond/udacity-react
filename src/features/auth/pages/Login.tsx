"use client";

import {Button, Card, Label, TextInput} from "flowbite-react";
import ShowStatus from "../../../common/components/ShowStatus";
import React, {useEffect, useState} from "react";
import {useAppDispatch} from "../../../common/hooks";
import {useTypedSelector} from "../../../app/stores";
import {selectAuth, selectError, selectStatus} from "../store/authSlice";
import {login} from "../store/authAPI";
import {useLocation, useNavigate} from "react-router";

export function Login() {
    const dispatch = useAppDispatch()
    const status = useTypedSelector(selectStatus);
    const error = useTypedSelector(selectError);
    const { state } = useLocation();

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    let navigate = useNavigate();
    const auth = useTypedSelector(selectAuth);
    useEffect(() => {
        if(auth) navigate(state?.path || "/");
    }, [auth, navigate, state?.path]);

    const onHandleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login({email, password}))
    }


    return (
        <Card className="max-w-sm">
            <h1 className='text-center text-2xl text-bold'>Employee Polls</h1>
            <img src="/poll/spinx.png" alt=""/>
            <ShowStatus status={status} error={error} />
            <form className="flex flex-col gap-4" onSubmit={onHandleLogin}>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email"/>
                    </div>
                    <TextInput onChange={(e) => setEmail(e.target.value)} id="email1"  type="email" placeholder="test@gmail.com" required/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password"/>
                    </div>
                    <TextInput onChange={(e) => setPassword(e.target.value)} id="password1" type="password" required/>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    );
}
