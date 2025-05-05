import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../../app/stores";
import {useAppDispatch} from "../../../common/hooks";
import {Button} from "flowbite-react";
import {selectAuth} from "../../auth/store/authSlice";
import {Link} from "react-router-dom";

const Home: React.FC = () => {
    const authState = useTypedSelector(selectAuth);
    const dispatch = useAppDispatch()

    return <section className={'container mx-auto'}>
        <div className={'flex flex-col items-center justify-center'}>
            <h1 className={'font-bold text-3xl'}>Your Health</h1>
            <h2 className={'font-bold text-3xl text-blue-500'}>Our Responsibility</h2>

            <p className={'mt-14'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam commodi delectus, dignissimos dolore
                doloribus facere impedit iste iure minus necessitatibus reprehenderit tempore! Accusantium alias atque
                dignissimos ex, nemo praesentium quam.</p>
            <Link to={'best-services'}>
                <Button>Get Started</Button>
            </Link>
        </div>
    </section>
}

export default Home