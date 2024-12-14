
'use client';

import { MegaMenu, Navbar } from 'flowbite-react';
import {NavLink} from "react-router-dom";

export default function MegaMenuTop() {
    return (
        <MegaMenu>
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
                <Navbar.Brand href="/">
                    <img alt="" src="/favicon.ico" className="mr-3 h-6 sm:h-9" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Book</span>
                </Navbar.Brand>
                <div className="order-2 hidden items-center md:flex">
                    <NavLink
                        to="/login"
                        className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
                    >
                        Login
                    </NavLink>
                    <NavLink to="/register">Sign up</NavLink>
                </div>
                <Navbar.Toggle />
            </div>
        </MegaMenu>
    );
}
