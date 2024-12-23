"use client";

import {Card, Dropdown, Label} from "flowbite-react";
import {HiCheckCircle} from "react-icons/hi";
import React, {useContext} from "react";
import {IBook} from "../types";
import {BookContext} from "../context";
interface IPropsBook {
    book: IBook
}

export function BookItem(props: IPropsBook) {
    const {categories, onChangeCategory} = useContext(BookContext)
    const {book} = props;

    return (
        <Card
            className="max-w-sm"
            renderImage={() => <img className="w-[100%]" src="/book/b1.png" alt="ph1"/>}
        >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {book.title}
            </h5>
            {/*<p className="font-normal text-gray-700 dark:text-gray-400">*/}
            {/*    {book.intro}*/}
            {/*</p>*/}
            <h6 className="text-sm text-gray-500">Author: {book.author}</h6>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="countries" value="Move to..."/>
                </div>
            </div>
            <Dropdown placement="top" size={'xs'} label="Move to...">
                {categories.map((cate, key) => (cate) === book.category ?
                    <Dropdown.Item key={key} onClick={() => onChangeCategory(book.id, cate)}
                                   icon={HiCheckCircle}>{cate}</Dropdown.Item>
                    : <Dropdown.Item key={key} onClick={() => onChangeCategory(book.id, cate)}>{cate}</Dropdown.Item>
                )}
            </Dropdown>
        </Card>
    );
}
