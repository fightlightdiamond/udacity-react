import {IBook} from "../interfaces";
import { faker } from '@faker-js/faker';
import {categories} from "../hooks/useContexts";

export const booksInit = Array.from({length: 15})
    .map(() => {
        return {id: faker.string.uuid(), title: faker.book.title(), intro: faker.lorem.sentence(), author: faker.book.author(), category: categories[Math.floor(Math.random() * 4)], ISBN: faker.string.uuid()}
    });

const data = {
    books: booksInit
};

export function getBooks(): Promise<IBook[]> {
    return Promise.resolve(data.books);
}

export function updateBooks(books: IBook[]) {
    data.books = books;
    return Promise.resolve(books);
}
