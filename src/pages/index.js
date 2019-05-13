import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h2>Articles</h2>
      <ul>
        {data &&
          data.allMarkdownRemark.nodes.map(article => (
            <li key={article.frontmatter.path}>
              <Link to={article.frontmatter.path}>
                {article.frontmatter.title}
              </Link>
            </li>
          ))}
      </ul>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          path
        }
      }
    }
  }
`;
export default IndexPage;
