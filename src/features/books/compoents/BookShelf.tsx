"use client";

import React from "react";
import {BookItem} from "./BookItem";
import {IBook} from "../types";
interface IPropsBook {
    books: IBook[]
    category: string
}

export function BookShelf(props: IPropsBook) {
    const {books, category} = props;

    return (
        <div>
            <h2 className='font-bold text-2xl leading-8'>{category}</h2>
            <div className='grid grid-cols-4 gap-8'>
                {books.map((book) => <BookItem key={book.id} book={book}/>)}
            </div>
        </div>
    );
}
