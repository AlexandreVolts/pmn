import * as React from "react";
import "./chat.css";
import Message from "./message";

const Chat = ({ messages }) =>
{
    const [stack, setStack] = React.useState([]);
    const addMessage = React.useCallback(() => {
        if (messages.length === 0)
            return;
        setStack([...stack, messages.shift()]);
        setTimeout(() => {
            addMessage();
        }, 5000);
    }, [stack, setStack, messages]);
    
    React.useEffect(() => {
        addMessage();
    }, []);
    
    function generateStack()
    {
        return (stack.map((message, index) => {
            const type = message.substr(message.indexOf("=\""), message.indexOf("\">"));
            return (
                <Message key={index} content={"<div " + message} className={type} />
            );
        }));
    }

    return (
        <div className="chat">
            {generateStack()}
        </div>
    );
};

export default Chat;