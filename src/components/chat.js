import * as React from "react";
import "./chat.css";
import Message from "./message";
import AnimatedBackground from "./animatedBackground";

const Chat = ({ messages }) =>
{
    const [cursor, setCursor] = React.useState(0);
    
    React.useEffect(() => {
        if (!messages || cursor > messages.length) {
            return;
        }
        const timer = setTimeout(() => {
            setCursor(cursor + 1);
        }, messages[cursor - 1] ? messages[cursor - 1].length * 75 : 0);

        return (() => clearInterval(timer));
    }, [messages, cursor]);
    
    function generateStack()
    {
        return (messages.slice(0, cursor).map((message, index) => {
            const types = message.substr(message.indexOf("=\""), message.indexOf("\">"));

            return (
                <Message key={index} content={"<div " + message} className={types[0]} />
            );
        }));
    }

    return (
        <>
            <AnimatedBackground />
            <div className="chat">
                <div className="top-layer">

                </div>
                <div className="content">
                    {generateStack()}
                </div>
            </div>
        </>
    );
};

export default Chat;