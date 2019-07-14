import React, { useEffect } from 'react';
import SEO from '../components/seo';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import HappeningNow from '../components/happening-now';
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
                      fixed(width: 800, height: 420) {
                        ...GatsbyImageSharpFixed_withWebp
                        }
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
          // Paralax
          const background = document.querySelector('.background');
          if (  background ) {
            background.style.top = -(scrolled * -0.65) + 'px';
          }
          // Hide banner text
          const bannerText = document.querySelector('.banner-text');
          if ( bannerText ) {
            if ( scrolled > 30 ) {
              bannerText.classList += ' hidden';
            } else {
              bannerText.classList = ' banner-text';
            }
          }
          
        });
      }, []);
      let image = `https://guineapig.tailsfromtherv.com${pages.acf.main_banner_image.localFile.childImageSharp.fixed.src}`;
      return ( 
      <Layout>
        <SEO 
          title="Tails From The RV - Adventures of a Guinea Pig"
          meta={[
            {
              property: `og:image`,
              content: image
            }
          ]}
         />
        <BackgroundImage Tag="div"
          className="parallax-image background"
          fluid={pages.acf.main_banner_image.localFile.childImageSharp.fluid}>
          <HappeningNow 
                className="happening_now-parallax"
                key={1} 
                highlightColour={pages.acf.highlight_color}/>  
        </BackgroundImage>
          <div className="banner-text">
            {/* <p className="">Coming this July</p>
            <hr className="banner-line"></hr> */}
            <p>Blizzard the Guinea Pig's Adventures</p>
          </div>
          <div className="index-container">
            <div className="index-margin">
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
          </div>
        </div>
      </Layout>
)}}
/>
)

export default Blog;