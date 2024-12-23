"use client";

import {TPoll} from "../types";
import {QuestionItem} from "./QuestionItems";
import React from "react";

export function QuestionType(props: {name: string, items: TPoll[]}) {
    const {items, name} = props
    const itemsSort = [...items].sort((a, b) => {
        return (new Date(a.createdAt)).getTime() - (new Date(b.createdAt)).getTime()
    });
    return (
        <div>
            <h2 className={'text-3xl font-bold leading-10'}>{name}</h2>
            <div className='grid grid-cols-4 gap-4'>
                {itemsSort.map((poll) => <QuestionItem key={poll.id} poll={poll}/>)}
            </div>
        </div>
    );
}
