import React, {useContext, useEffect, useState} from "react";
import {Button} from "flowbite-react";
import {HiDocumentSearch } from "react-icons/hi";
import {Link} from "react-router";
import {BookShelf} from "../compoents/BookShelf";
import {IBook} from "../types";
import {BookContext} from "../context";

const BookHome: React.FC = () => {
    const {books} = useContext(BookContext)

    const [currentlyReadings, setCurrentlyReadings] = useState<IBook[]>([]);
    const [wantToReads, setWantToReads] = useState<IBook[]>([]);
    const [reads, setReads] = useState<IBook[]>([]);

    useEffect(() => {
        setCurrentlyReadings([...books.filter((books) => books.category === 'Currently Reading')]);
        setWantToReads([...books.filter((books) => books.category === 'Want to Read')]);
        setReads([...books.filter((books) => books.category === 'Read')]);
    }, [books]);

    return <section className={'container mx-auto'}>
        <BookShelf books={currentlyReadings} category='Currently Readings'/>
        <BookShelf books={wantToReads} category='Want To Reads'/>
        <BookShelf books={reads} category='Reads'/>

        <Link to='/search' className='fixed bottom-10 right-10'>
            <Button outline pill>
                <HiDocumentSearch className="h-6 w-6" />
            </Button>
        </Link>

    </section>
}

export default BookHome