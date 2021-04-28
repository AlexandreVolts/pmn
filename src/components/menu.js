import * as React from "react";
import "./menu.css";

const Menu = ({numberOfChapters, onClickOnChapter}) => {
    const colors = ["#1abc9c", "#3498db", "#f1c40f", "#e67e22", "#e74c3c"];
    const generateItems = () => {
        const output = [];
        
        for (let i = 0; i < numberOfChapters; i++) {
            output.push(
                <button
                    key={i}
                    onClick={() => onClickOnChapter(i)}
                    style={{backgroundColor: colors[~~(Math.random() * colors.length)]}}
                >
                    Chapter {i}
                </button>);
        }
        return (output);
    };
    
    return (
        <div class="main-menu">
            {generateItems()}
        </div>
    );
};

export default Menu;