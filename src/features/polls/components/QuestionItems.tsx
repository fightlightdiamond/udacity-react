
"use client";

import {Button, Card} from "flowbite-react";
import {useNavigate} from "react-router";
import {TPoll} from "../types";

export function QuestionItem(props: {poll: TPoll}) {
    let navigate = useNavigate();

    const {poll} = props
    return (
        <Card href="#" className="max-w-sm">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                {poll.author?.name}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {poll.createdAt}
            </p>

            <Button onClick={() => navigate('/questions/' + poll.id)} className={'w-full'}>Show</Button>
        </Card>
    );
}
