import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MasterLayout from "./components/layout/MasterLayout";
import {Login} from "./pages/auth/Login";
import {Register} from "./pages/auth/Register";
import AuthLayout from "./components/layout/AuthLayout";
import BookLayout from "./components/layout/BookLayout";
import BookHome from "./pages/book/BookHome";
import BookSearch from "./pages/book/BookSearch";
import TodoHome from "./pages/todo/TodoHome";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route element={<MasterLayout/>}>
                {/*<Route index path="/" element={<App />} />*/}
                <Route element={<BookLayout/>}>
                    <Route path="/" element={<BookHome/>}/>
                    <Route path="/search" element={<BookSearch/>}/>
                </Route>
            </Route>
            <Route element={<AuthLayout/>}>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Route>
            <Route path="/todo" element={<TodoHome/>}/>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
