import React, { useEffect } from 'react';
import SEO from '../components/seo';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import HappeningNow from '../components/happening-now';
import BannerImage from '../components/banner-image';
import Carousel from '../components/carousel/carousel';
import LatestPost from '../components/latest-post';
import PostList from '../components/postList';
import BackgroundImage from 'gatsby-background-image'


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
                  acf {
                    excerpt
                    location
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
                  slug
                  title
                }
              }
            }
              wordpressWpBlogs {
                title
                slug
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
                  excerpt
                }
              }
            }
    `}
    render={data => {
      const { wordpressWpBlogs: post } = data;
      const { allWordpressWpBlogs: posts } = data;
      const { wordpressAcfPages: pages } = data;
      useEffect(() => {
        window.addEventListener('scroll', () => {
          var scrolled = window.pageYOffset;
          const background = document.querySelector('.background');
          background.style.top = -(scrolled * -0.2) + 'px';
        });
      }, []);
      return ( 
      <Layout>
        <SEO title="Home" />
        <HappeningNow 
                key={1} 
                highlightColour={pages.acf.highlight_color}/>      
            <BackgroundImage Tag="div"
              className="background parallax-image"
              fluid={pages.acf.main_banner_image.localFile.childImageSharp.fluid}
              backgroundColor={`#040e18`}/>
              <p className="banner-text">Coming this July</p>
              <Carousel key={3} images={posts.edges}/>
              <LatestPost 
                key={4} 
                title={post.title}
                slug={post.slug}
                location={post.acf.location}
                what={post.acf.excerpt}
                image={post.acf.image.localFile.childImageSharp}
                highlight={post.acf.highlight_color}/>
              <PostList key={5} data={posts.edges}/>
      </Layout>
)}}
/>
)

export default Blog;