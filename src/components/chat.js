import * as React from "react";
import "./chat.css";
import Message from "./message";
import AnimatedBackground from "./animatedBackground";

const Chat = ({ messages, setIsFinished }) =>
{
    const [cursor, setCursor] = React.useState(0);
    const messageEndRef = React.createRef(null);
    
    React.useEffect(() => {
        if (cursor > messages.length) {
            setIsFinished(true);
            return;
        }
        const timer = setTimeout(() => {
            setCursor(cursor + 1);
        }, messages[cursor - 1] ? messages[cursor - 1].length * 70 : 0);

        return (() => clearInterval(timer));
    }, [messages, cursor, setIsFinished]);

    React.useEffect(() => {
        console.log(messageEndRef.current?.scrollIntoView);
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, messageEndRef]);
    
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
                <div className="content">
                    {generateStack()}
                    <div ref={messageEndRef}></div>
                </div>
            </div>
        </>
    );
};

export default Chat;