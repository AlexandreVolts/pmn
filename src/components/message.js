import React from "react";
import "./message.css";

const Message = ({content, type}) =>
{
    return (
        <div className={type} dangerouslySetInnerHTML={{__html: content}}></div>
    );
};

export default Message;