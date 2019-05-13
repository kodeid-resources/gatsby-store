import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout.js';

const Post = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { prev, next } = pageContext;
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <br />
      {prev && (
        <Link style={{ textDecoration: 'none' }} to={prev.path}>
          ◀️ Prev
        </Link>
      )}{' '}
      |{' '}
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        Index
      </Link>{' '}
      |{' '}
      {next && (
        <Link style={{ textDecoration: 'none' }} to={next.path}>
          Next ▶️
        </Link>
      )}
    </Layout>
  );
};

export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`;

export default Post;
