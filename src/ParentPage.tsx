import React, { useRef, useState, useEffect } from 'react';
import {Button} from "flowbite-react";
import {faker} from "@faker-js/faker";

const ParentPage: React.FC = () => {
    const [receivedMessage, setReceivedMessage] = useState<string>('');
    const childWindowRef = useRef<Window | null>(null);

    const openChildPage = () => {
        // Mở Child Page trong một popup window
        childWindowRef.current = window.open('/child', 'Child Page');
    };

    const sendMessageToChild = () => {
        if (childWindowRef.current) {
            const message = { action: 'greet', payload: faker.lorem.sentence() };

            childWindowRef.current.postMessage(message, '*');
        } else {
            console.warn('Child window is not open!');
        }
    };

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== window.location.origin) {
                console.warn('Unknown origin:', event.origin);
                return;
            }
            setReceivedMessage(JSON.stringify(event.data));
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Parent Page</h1>
            <Button onClick={openChildPage}>Open Child Page</Button>
            <Button onClick={sendMessageToChild}>Send Message to Child</Button>
            <p>Message from Child: {receivedMessage}</p>
        </div>
    );
};

export default ParentPage;
