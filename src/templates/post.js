import React from 'react';
import PropType from 'prop-types';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import formatDate from '../components/formatDate';
// require('dotenv').config({
//   path: '.env'
// });

import Layout from '../components/layout';

// const stripHtml = (html) => {
//   if (typeof window !== 'undefined') {
//     const doc = new DOMParser().parseFromString(html, 'text/html');
//     return doc.body.textContent || '';
//   }
//   return html;
// };
const PostTemplate = (props) => {
  const { data: { wordpressWpBlogs: post } } = props;
  return (
    <Layout>
      <SEO title={post.title}/>
      <article>
          <p className="muted-text">{`Blog > ${post.title}`}</p>
          <p className="muted-text font-xs">{formatDate(post.date)}</p>
          <h1 className="padding-paragraph-y">{post.title}</h1>
          <p className="muted-text font-xs">By <span className="font-xs color-black">{post.author.name}</span></p>
      </article>
      <Link to="/">Go Back</Link>
    </Layout>
  );
};
PostTemplate.propTypes = {
  data: PropType.shape({}).isRequired,
};
export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressWpBlogs(id: { eq: $id }) {
        id
        author {
          name
        }
        title
        date
        acf {
            highlight_color
            location
            what
            image {
            localFile {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    }
  }
}
`;