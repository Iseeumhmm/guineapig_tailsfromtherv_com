import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql, Link } from 'gatsby';

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
  
  console.log("This is post: ", post);
  return (
    <Layout>
      <Helmet
        title={post.title}
        // meta={[
        //   { name: 'description', content: post.excerpt },
        // ]}
      />
      <Link to="/blog/">Go Back</Link>
      <article>
        <header>
          <div className="background-bar">
            {/* { post.featured_media && (
            <Img
              src={post.featured_media.localFile.childImageSharp.sizes.src}
              sizes={post.featured_media.localFile.childImageSharp.sizes}
              className="img-fluid"
              alt={post.title}
            />
            )} */}
            {/* <h1 dangerouslySetInnerHTML={{ __html: post.title }} /> */}
          </div>
        </header>
        <section className="container-fluid main-body">
          <p>Working?</p>
        </section>
      </article>
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