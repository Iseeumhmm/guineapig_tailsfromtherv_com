import React, { useEffect } from 'react';
import PropType from 'prop-types';
import Img from 'gatsby-image';
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
const PostTemplate = (props) => {
  const { data: { wordpressWpBlogs: post } } = props;

  useEffect(() => {
    // Add Disqus Comments
    // var disqus_config = function () {
    //   this.page.url = "http://guineapig.tailsfromtherv.com";
    //   this.page.identifier = post.slug;
    // };
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
      <SEO title={post.title}/>
      <article>
          <p className="muted-text">{`Blog > ${post.title}`}</p>
          <p className="muted-text font-xs">{formatDate(post.date)}</p>
          <h1 className="padding-paragraph-y">{post.title}</h1>
          <p className="muted-text font-xs">By <span className="font-xs color-black">{post.author.name}</span> - <span className=" muted-text font-xs">{formatDate(post.date)}</span></p>
          <div className="comments-container">
            <div className="comments-form" id="disqus_thread"></div>
          </div>
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