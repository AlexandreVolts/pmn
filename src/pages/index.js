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
  const [chapter, setChapter] = React.useState(0);
  
  const onClickOnStart = () => {
    setIsTriggered(true);
    setBackground(chapters[chapter].substr(0, chapters[chapter].indexOf("\"")));
  };
  
  return (
    <Layout>
      <VideoBackground video={background} />
      <div className="preview">
        <Splash />
        { !triggered && <div onClick={onClickOnStart}>
          <motion.h2
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 6, duration: 2}}
          >
            <i>Por favor, clica sobre este texto para empezar</i>
          </motion.h2>
        </div> }
      </div>
      <button>Empezar el capitulo</button>
      { triggered && <Chat messages={allMessages[chapter]} /> }
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