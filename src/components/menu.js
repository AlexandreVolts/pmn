import * as React from "react";
import { motion } from "framer-motion";
import "./menu.css";

const Menu = ({numberOfChapters, onClickOnChapter}) => {
    const colors = ["#34ace0", "#706fd3", "#40407a", "#2c2c54", "#474787"];
    const generateItems = () => {
        const output = [];
        
        for (let i = 0; i < numberOfChapters; i++) {
            output.push(
                <motion.button
                    key={i}
                    onClick={() => onClickOnChapter(i)}
                    initial={{scale: 1.5, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{delay: 0.1 * i}}
                    style={{backgroundColor: colors[~~(Math.random() * colors.length)]}}
                >
                    Chapter {i}
                </motion.button>
            );
        }
        return (output);
    };
    
    return (<div class="main-menu">{ generateItems() }</div>);
};

export default Menu;