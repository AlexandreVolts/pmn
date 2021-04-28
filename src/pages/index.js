import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import VideoBackground from "../components/videoBackground";
import Phone from "../components/phone";

const IndexPage = ({ data }) => {
  const content = data.markdownRemark.html;
  const [background, setBackground] = React.useState(undefined);
  
  return (
    <Layout>
      <VideoBackground video={background} />
      <Phone content={content} setBackground={setBackground} />
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