import * as React from "react";
import "./chat.css";
import Message from "./message";
import AnimatedBackground from "./animatedBackground";

const Chat = ({ messages }) =>
{
    const [cursor, setCursor] = React.useState(0);
    
    React.useEffect(() => {
        if (cursor >= messages.length)
            return;
        const timer = setTimeout(() => {
            setCursor(cursor + 1);
        }, messages[cursor - 1] ? messages[cursor - 1].length * 66 : 0);

        return (() => clearInterval(timer));
    });
    
    function generateStack()
    {
        return (messages.slice(0, cursor).map((message, index) => {
            const type = message.substr(message.indexOf("=\""), message.indexOf("\">"));
            return (
                <Message key={index} content={"<div " + message} className={type} />
            );
        }));
    }

    return (
        <div className="chat">
            <AnimatedBackground />
            <div className="content">
                <div className="top-layer">

                </div>
                {generateStack()}
            </div>
        </div>
    );
};

export default Chat;