import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import HappeningNow from '../components/happening-now';
import BannerImage from '../components/banner-image';
import Carousel from '../components/carousel/carousel';
import LatestPost from '../components/latest-post';
import PostList from '../components/postList';

const Blog = () => (
  <StaticQuery
    query={graphql`
        query BlogQuery {
            wordpressAcfPages {
              acf {
                highlight_color
                main_banner_image {
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
            allWordpressWpBlogs {
              edges {
                node {
                  id
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
                  title
                }
              }
            }
              wordpressWpBlogs {
                title
                acf {
                  highlight_color
                  image {
                    localFile {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  location
                  what
                }
              }
            }
    `}
    render={data => ( 
      <Layout>
        <HappeningNow key={1} highlightColour={data.wordpressAcfPages.acf.highlight_color}/>
        <BannerImage key={2} image={data.wordpressAcfPages.acf.main_banner_image.localFile.childImageSharp.fluid}/>
        <Carousel key={3} images={data.allWordpressWpBlogs.edges}/>
        <LatestPost 
          key={4} 
          title={data.wordpressWpBlogs.title}
          location={data.wordpressWpBlogs.acf.location}
          what={data.wordpressWpBlogs.acf.what}
          image={data.wordpressWpBlogs.acf.image.localFile.childImageSharp}
          highlight={data.wordpressWpBlogs.acf.highlight_color}/>
        <PostList key={5} data={data.allWordpressWpBlogs.edges}/>
      </Layout>
)}
/>
)

export default Blog;