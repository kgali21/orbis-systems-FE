import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
    const messageElements = messages.map(data => 
        <li>
            <Message tweets={data}/>
        </li>
    );

    return (
        <ul>
            {messageElements}
        </ul>
    );
};

export default Messages;