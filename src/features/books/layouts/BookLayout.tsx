import {Outlet} from "react-router";
import React, {useCallback, useEffect, useState} from "react";
import {getBooks, updateBooks} from "../mock/_DATA_";
import {IBook} from "../types";
import {BookContext, categories} from "../context";

const BookLayout = () => {
    const [books, setBooks] = useState<IBook[]>([])
    const [booksSearch, setBooksSearch] = useState<IBook[]>([])
    const [textSearch, setTextSearch] = useState<string>("")

    useEffect( () => {
        getBooks().then((books) => {
            setBooks(books);
        });
    }, []);

    const onSearchBook = useCallback((q: string) => {
        const query = q.toLowerCase();

        setTextSearch(query);
        if (!query) {
            // Reset books searched to empty
            setBooksSearch([]);
            return;
        }
        const bookResult = books.filter((book) =>
            book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
        );
        setBooksSearch([...bookResult]);
    }, [books]); // `books` là dependency

    useEffect(() => {
        updateBooks(books).then(() => {
            onSearchBook(textSearch)
        })
    }, [books, onSearchBook, textSearch]);

    const onChangeCategory = (id: string, category: string) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === id ? { ...book, category } : book
            )
        );
    }

    return <div className='container mx-auto'>
        <BookContext.Provider value={{categories, books, onChangeCategory, booksSearch, onSearchBook}}>
            <Outlet />
        </BookContext.Provider>
    </div>
}

export default BookLayout