import * as React from "react";
import Layout from "../components/layout";
import { motion } from "framer-motion"

const IndexPage = ({ data }) => {
  const content = data.markdownRemark.html;
  const allMessages = content.split("<div");
  console.log(allMessages);
  
  return (
    <Layout>
      <div className="preview">
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
      </div>
      <div className="main">

      </div>
    </Layout>
  )
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
