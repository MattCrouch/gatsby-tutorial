import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import Container from "../../components/Container/Container";
import Layout from "../Layout/Layout";
import PostHeader from "../../components/PostHeader/PostHeader";

export const Blog = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <Helmet
        title={frontmatter.title}
        meta={[{ name: "keywords", content: frontmatter.tags.join(",") }]}
      />
      <PostHeader date={frontmatter.date} title={frontmatter.title} />
      <Container>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "D MMMM YYYY")
        tags
        title
      }
    }
  }
`;

export default Blog;
