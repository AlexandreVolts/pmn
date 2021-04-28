import * as React from "react";
import Chat from "./chat";
import "./phone.css";
import Menu from "./menu";

const Phone = ({ content, setBackground }) => {
    const chapters = content.split("<div class=\"chapter ");
    const allMessages = chapters.map((chapter) => chapter.split("<div "));
    const [isInMenu, setIsInMenu] = React.useState(false);
    const [chapter, setChapter] = React.useState(0);

    const onClickOnChapter = (index) => {
        setChapter(index);
        setBackground(chapters[index].substr(0, chapters[index].indexOf("\"")));
        setIsInMenu(false);
    };
    
    const drawContentOnScreen = () => {
        if (isInMenu) {
            return (<Menu numberOfChapters={chapters.length} onClickOnChapter={onClickOnChapter}/>);
        }
        else {
            return (<Chat messages={allMessages[chapter]} />);
        }
    };
    
    return (
        <div className="phone">
            <div className="screen">{drawContentOnScreen()}</div>
            <div className="bottom-menu">
                <button className="phone-button" onClick={() => setIsInMenu(true)}></button>
            </div>
        </div>
    );
};

export default Phone;