import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router";
import MasterLayout from "./common/components/layout/MasterLayout";
import AuthLayout from "./features/auth/layouts/AuthLayout";
import BookLayout from "./features/books/layouts/BookLayout";
import TodoHome from "./features/todos/pages/TodoHome";
import {Provider} from "react-redux";
import {store} from "./app/stores";
import BookHome from "./features/books/pages/BookHome";
import BookSearch from "./features/books/pages/BookSearch";
import {Login} from "./features/auth/pages/Login";
import {Register} from "./features/auth/pages/Register";
import NotFound from "./common/pages/404";
import QuestionDetail from "./features/polls/pages/QuestionDetail";
import PollLayout from "./features/polls/layout/PollLayout";
import PollHome from "./features/polls/pages/PollHome";
import Leaderboard from "./features/polls/pages/Leaderboard";
import NewPoll from "./features/polls/pages/NewPoll";
import Protected from "./common/components/Protected";
import ChildPage from "./ChildPage";
import ParentPage from "./ParentPage";
import Home from "./features/home/pages/Home";
import BaseLayout from "./common/components/layout/BaseLayout";
import BestServices from "./features/home/pages/BestServices";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route element={<Protected><BaseLayout/></Protected>}>
                        <Route index path="/" element={<Home />} />
                        <Route index path="/best-services" element={<BestServices />} />
                    </Route>
                    <Route element={<Protected><MasterLayout/></Protected>}>
                        <Route path="/p" element={<ParentPage />} />
                        <Route path="/child" element={<ChildPage />} />
                        <Route element={<BookLayout/>}>
                            <Route path="/book" element={<BookHome/>}/>
                            <Route path="/search" element={<BookSearch/>}/>
                        </Route>
                        <Route element={<PollLayout/>}>
                            <Route index path="/poll-home" element={<PollHome />} />
                            <Route path="leaderboards" element={<Leaderboard />} />
                            <Route path="new-polls" element={<NewPoll />} />
                            <Route path="questions/:id" element={<QuestionDetail />} />
                        </Route>
                    </Route>
                    <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Route>
                    <Route path="/todo" element={<TodoHome/>}/>
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

