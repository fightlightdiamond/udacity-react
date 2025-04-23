'use client';

import {Avatar, Button, Dropdown, MegaMenu, Navbar} from 'flowbite-react';
import {useTypedSelector} from "../../../app/stores";
import {logout, selectAuth} from "../../../features/auth/store/authSlice";
import {useAppDispatch} from "../../hooks";
import {useLocation, useNavigate} from "react-router-dom";
import React from "react";

export default function MegaMenuTop() {
    const auth = useTypedSelector(selectAuth);
    const dispatch = useAppDispatch()
    const onLogout = () => {
        dispatch(logout())
    }
    let navigate = useNavigate();
    const location = useLocation();

    return (
        <MegaMenu>
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 md:space-x-8">
                <Navbar.Brand onClick={() => navigate('/')}>
                    <img alt="" src="/favicon.ico" className="mr-3 h-6 sm:h-9"/>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Poll App</span>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    {
                        auth ? <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings"
                                        img={auth?.avatar} rounded/>
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">{auth?.name}</span>
                                <span className="block truncate text-sm font-medium">{auth?.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item onClick={() => onLogout()}>Sign out</Dropdown.Item>
                        </Dropdown> :
                            <div className={'flex gap-1'}>
                                <Button pill={true} outline={true}>Sign Up</Button>
                                <Button pill={true} outline={true}>Login</Button>
                            </div>
                    }

                </div>
                <Navbar.Collapse>
                    <Navbar.Link active={location.pathname ==='/'} onClick={() => navigate('/')}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link active={location.pathname ==='/leaderboards'} onClick={() => navigate('/leaderboards')}>Leader board</Navbar.Link>
                    <Navbar.Link active={location.pathname ==='/new-polls'} onClick={() => navigate('/new-polls')}>New</Navbar.Link>
                </Navbar.Collapse>
                <Navbar.Toggle/>
            </div>
        </MegaMenu>
    );
}
