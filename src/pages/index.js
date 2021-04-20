import * as React from "react";
import { graphql } from "gatsby";
import { motion } from "framer-motion";
import Layout from "../components/layout";
import Chat from "../components/chat";

const IndexPage = ({ data }) => {
  const content = data.markdownRemark.html;
  const allMessages = content.split("<div class=\"chapter\">").slice(1);
  const [triggered, setIsTriggered] = React.useState(false);
  
  return (
    <Layout>
      <div className="preview">
        <motion.div
          animate={{opacity: 0}}
          transition={{delay: 8}}
        >
          <motion.h1
            initial={{y: "-50vh", opacity: 0}}
            animate={{y: "25vh", opacity: 1}}
            transition={{duration: 2, type: "spring", stiffness: 200}}
          >
            Hola babe UwU
          </motion.h1>
          <motion.h2
            initial={{y: "-50vh", opacity: 0}}
            animate={{y: "26vh", opacity: 1}}
            transition={{delay: 1, duration: 2, type: "spring", stiffness: 125}}
          >
            Bueno, parece que hace un ano que estamos juntos :o
          </motion.h2>
        </motion.div>
        { !triggered && <div onClick={() => setIsTriggered(true)}>
          <motion.h2
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 8, duration: 2}}
          >
            <i>Por favor, clica sobre este texto para empezar</i>
          </motion.h2>
        </div> }
      </div>
      { triggered && <Chat messages={allMessages}/> }
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