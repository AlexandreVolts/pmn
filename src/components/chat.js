import * as React from "react";
import "./chat.css";

const Chat = ({ messages }) =>
{
    console.log(messages);
    
    return (
        <div className="chat">
            <h1>{messages[0]}</h1>
        </div>
    );
}
export default Chat;