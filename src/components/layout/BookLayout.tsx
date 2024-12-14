import {Outlet} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {BookContext, categories} from "../../hooks/useContexts";
import {IBook} from "../../interfaces";
import {getBooks, updateBooks} from "../../mock/_DATA_";

const BookLayout = () => {
    const [books, setBooks] = useState<IBook[]>([])
    const [booksSearch, setBooksSearch] = useState<IBook[]>([])
    const [textSearch, setTextSearch] = useState<string>("")

    useEffect( () => {
        getBooks().then((books) => {
            setBooks(books);
        });
    }, []);

    useEffect(() => {
        updateBooks(books).then(() => {
            onSearchBook(textSearch)
        })
    }, [books]);

    const onChangeCategory = (id: string, category: string) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) =>
                book.id === id ? { ...book, category } : book
            )
        );
    }

    const onSearchBook = (q: string) => {
        q = q.toLowerCase();
        console.log('q', q, typeof q, q==='', q.length)
        setTextSearch(q)
        if (!q) {
            //reset books searched empty
            setBooksSearch([]);
            return;
        }
        const bookResult = books.filter((book) =>
            book.title.toLowerCase().includes(q) || book.author.toLowerCase().includes(q)
        )
        setBooksSearch([...bookResult]);
    }

    return <div className='container mx-auto'>
        <BookContext.Provider value={{categories, books, onChangeCategory, booksSearch, onSearchBook}}>
            <Outlet />
        </BookContext.Provider>
    </div>
}

export default BookLayout