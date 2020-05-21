import React from 'react';
import Message from './Message';

const Messages = ({ messages }) => {
    const messageElements = messages.map((data, i) => 
        <li key={i}>
            <Message tweets={data.body} timeStamp={data.created_at}/>
        </li>
    );

    return (
            <ul>
                {messageElements}
            </ul>
    );


};

export default Messages;