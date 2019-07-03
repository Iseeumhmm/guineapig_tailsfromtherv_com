import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

// const stripHtml = (html) => {
//   if (typeof window !== 'undefined') {
//     const doc = new DOMParser().parseFromString(html, 'text/html');
//     return doc.body.textContent || '';
//   }
//   return html;
// };
const PageTemplate = (props) => {
  const { data: { wordpressPage: page } } = props;
  return (
    <Layout>
      <Helmet
        title={page.title}
        meta={[
          { name: 'description', content: page.excerpt },
        ]}
      />
      <article>
        <header>
          <div>
            { page.featured_media && (
            <Img
              src={page.featured_media.localFile.childImageSharp.sizes.src}
              sizes={page.featured_media.localFile.childImageSharp.sizes}
              className="img-banner"
              alt={page.title}
            />
            )}
            <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
          </div>
        </header>
        <div className="content-body">
          <p dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
        <div className="hidden-xs col-sm-1 col-md-2" />
      </article>
    </Layout>
  );
};
PageTemplate.propTypes = {
  data: PropType.shape({}).isRequired,
};
export default PageTemplate;

// export const pageQuery = graphql`
//   query($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//         title
//         content
//         excerpt
//         date(formatString: "DD, MMM YYYY")
//         author{
//             name
//             description
//             avatar_urls{
//               wordpress_48
//             }
//         }
//         featured_media{
//           localFile{
//             childImageSharp{
//               id
//               sizes( maxHeight: 800 ) {
//                   ...GatsbyImageSharpSizes
//               }
//             }
//           }
//         }
//         slug
//     }
//   }
// `;