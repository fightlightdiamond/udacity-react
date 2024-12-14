import React, {useContext} from "react";
import {Button, TextInput} from "flowbite-react";
import { HiArrowLeft } from "react-icons/hi";
import {Link} from "react-router-dom";
import {BookContext} from "../../hooks/useContexts";
import {BookItem} from "../../components/book/BookItem";

const BookSearch: React.FC = () => {
    const { booksSearch, onSearchBook} = useContext(BookContext)

    return <section className={'container mx-auto'}>
        <form className='flex gap-1 mb-8'>
            <Link to='/'>
                <Button>
                    <HiArrowLeft className="h-5 w-5"/>
                </Button>
            </Link>
            <TextInput onChange={(e) => onSearchBook(e.target.value)} className='w-[100%]'
                       placeholder="Search by title, author, ISBN" shadow/>
        </form>
        <div className='grid grid-cols-4 gap-8'>
            {booksSearch.map((book) => <BookItem key={book.id} book={book}/>)}
        </div>
    </section>
}

export default BookSearch