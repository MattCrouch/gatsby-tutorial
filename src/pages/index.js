import React from "react";
import { graphql } from "gatsby";

import Layout from "../templates/Layout/Layout";
import PostSample from "../components/PostSample/PostSample";

import "./index.css";

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts }
  } = data;

  return (
    <Layout>
      <div className="index__posts">
        {posts.map(post => (
          <PostSample
            date={post.node.frontmatter.date}
            excerpt={post.node.excerpt}
            key={post.node.frontmatter.path}
            path={post.node.frontmatter.path}
            summary={post.node.frontmatter.summary}
            tags={post.node.frontmatter.tags}
            title={post.node.frontmatter.title}
          />
        ))}
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "D MMMM YYYY")
            path
            tags
            summary
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
