import React, { useEffect } from 'react';
import PropType from 'prop-types';
import BackgroundImage from 'gatsby-background-image';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import formatDate from '../components/formatDate';


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
  useEffect(() => {
    // Add Disqus Comments
    
    var d = document, s = d.createElement('script');
    s.src = 'https://tails-from-the-rv.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    const script = document.createElement("script");
    script.src = "https://tails-from-the-rv.disqus.com/count.js";
    script.id = 'dsq-count-scr';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <SEO 
        title={page.title}
        description={page.acf.excerpt}
        meta={[
          {
            property: `og:image`,
            content: `https://guineapig.tailsfromtherv.com${page.acf.main_banner_image.localFile.childImageSharp.fixed.src}`
          }
        ]}
      />
      <article>
        <div className="post-header">
          <Link 
            to="/"
            className="post-go-back">
            Go Back
          </Link>
          <p className="muted-text">{`${page.title}`}</p>
          <p className="post-author muted-text font-xs">By <span className="font-xs color-black">{page.author.name}</span> - <span className=" muted-text font-xs">{formatDate(page.date)}</span></p>
        </div>

        <div className="post-banner">
          <BackgroundImage 
            Tag="div"
            className="post-image"
            fluid={page.acf.main_banner_image.localFile.childImageSharp.fluid}/>
        </div>

        {/* <div className="post-main-content">
          <h1>{post.acf.location}</h1>
          <p>{post.acf.what}</p>
        </div> */}

        <div className="comments-container">
          <div className="comments-form" id="disqus_thread"></div>
        </div>
      </article>
    </Layout>
  );
};
PageTemplate.propTypes = {
  data: PropType.shape({}).isRequired,
};
export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
        id
        author {
            name
        }
        title
        date
        acf {
            highlight_color
            main_banner_image {
                localFile {
                    childImageSharp {
                        fixed(width: 800, height: 420) {
                        ...GatsbyImageSharpFixed
                        }
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