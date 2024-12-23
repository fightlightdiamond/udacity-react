import * as React from 'react';

const Greetings = (props: {name: string}) => {
    return (
        <h1>
            {props.name ? ('Welcome back ' + props.name + '!') : ('Welcome!')}
        </h1>
    );
}

export default Greetings;