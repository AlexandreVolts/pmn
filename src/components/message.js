import React from "react";
import { motion } from "framer-motion";
import "./message.css";

const Message = ({content, type}) =>
{
    return (
        <motion.div
            initial={{scale: 0.25, y: 400}}
            animate={{scale: 1, y: 0}}
            className={type + " message"}
            dangerouslySetInnerHTML={{__html: content}}
        ></motion.div>
    );
};

export default Message;