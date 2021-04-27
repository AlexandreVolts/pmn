import * as React from "react";
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import Chat from "../components/chat";
import Splash from "../components/splash";
import VideoBackground from "../components/videoBackground";

const IndexPage = ({ data }) => {
  const content = data.markdownRemark.html;
  const chapters = content.split("<div class=\"chapter ").slice(1);
  const allMessages = chapters.map((chapter) => chapter.split("<div "));
  const [triggered, setIsTriggered] = React.useState(false);
  const [background, setBackground] = React.useState(undefined);
  const [chapter, setChapter] = React.useState(-1);
  
  const onClickOnStart = () => {
    const cur = chapter + 1;
    
    setIsTriggered(true);
    setChapter(cur);
    setBackground(chapters[cur].substr(0, chapters[cur].indexOf("\"")));
  };
  
  return (
    <Layout>
      <VideoBackground video={background} />
      <div className="preview">
        <Splash />
        { !triggered && <div>
          <motion.h2
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 6, duration: 2}}
          >
            <motion.button
              onClick={onClickOnStart}
              initial={{y: "-50vh", opacity: 0}}
              animate={{y: "15vh", opacity: 1}}
              transition={{delay: 7, duration: 2, type: "spring", stiffness: 200}}
            >
              Empezar el capitulo
            </motion.button>
          </motion.h2>
        </div> }
      </div>
      { triggered && <Chat messages={allMessages[chapter]} setIsTriggered={setIsTriggered} /> }
    </Layout>
  );
};

export const query = graphql`
query MyQuery {
  markdownRemark {
    id
    html
  }
}
`
export default IndexPage