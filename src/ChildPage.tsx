import React, { useState, useEffect } from 'react';
import {faker} from "@faker-js/faker";
import Cookies from 'js-cookie';

const ChildPage: React.FC = () => {
    const [receivedMessage, setReceivedMessage] = useState<string>('');

    useEffect(() => {
        Cookies.set('username', 'JohnDoe', { expires: 7 }); // Cookie sẽ hết hạn sau 7 ngày

        // Lấy cookie
        const username = Cookies.get('username');
        console.log('Cookie Value:', username);

        const handleMessage = (event: MessageEvent) => {
            if (event.origin !== window.location.origin) {
                console.warn('Unknown origin:', event.origin);
                return;
            }
            setReceivedMessage(JSON.stringify(event.data));

            const data = event.data;
            // Kiểm tra action trước khi phản hồi
            if (data.action === 'greet') {
                setReceivedMessage(JSON.stringify(data));

                // Gửi phản hồi lại Parent Page
                event.source?.postMessage(
                    { status: 'success', response: faker.lorem.sentence() },
                );
            }
        };

        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Child Page</h1>
            <p>Message from Parent: {receivedMessage}</p>
        </div>
    );
};

export default ChildPage;
