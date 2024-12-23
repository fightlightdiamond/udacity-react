import React from "react";
import {IBook} from "./types";

export const categories = [
    'Currently Reading',
    'Want to Read',
    'Read',
    'None',
];

type TBookContext = {
    categories: string[],
    books: IBook[],
    booksSearch: IBook[],
    onChangeCategory: (id: string, category: string) => void
    onSearchBook: (q: string) => void
}

export const BookContext = React.createContext<TBookContext>({
    categories,
    books: [],
    booksSearch: [],
    onChangeCategory: () => {},
    onSearchBook: () => {},
});