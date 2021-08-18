import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/HomePage/Layout'
import Img from 'gatsby-image'
import Head from '../components/HomePage/Head'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const query = graphql`
  query ($slug: String!) {
    nodeBlog(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      field_link {
        uri
        title
      }
      relationships {
        field_blog_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const post = data.nodeBlog
  const youtubeLink = data.nodeBlog.field_link[0]?.uri
  const image =
    data.nodeBlog.relationships.field_blog_image[1]?.localFile?.childImageSharp
      ?.fluid

  console.log(image)
  return (
    <Layout>
<<<<<<< HEAD
      <Head title={data.nodeBlog.title} />
      <Carousel
        autoPlay
        showStatus={true}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        {youtubeLink ? (
          <VideoContainer>
            <iframe src={youtubeLink}></iframe>
          </VideoContainer>
        ) : (
          <Img fluid={image} />
        )}
        {data.nodeBlog.relationships.field_blog_image.map((image) => {
          const youtubeLink = data.nodeBlog.field_link[0]?.uri

          const portfolioImages = image.localFile?.childImageSharp?.fluid
          return (
            <div>
              {portfolioImages ? (
                <div>
                  <Img fluid={portfolioImages} />

                  <p className="legend">{data.nodeBlog.title} </p>
                </div>
              ) : null}
            </div>
          )
        })}
      </Carousel>
=======
      <PortfolioLayout>
        <Head title={data.nodeBlog.title} />
        <h1>{data.nodeBlog.title}</h1>
        {image ? (
          <div>
            <Img fluid={image} />
            <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
          </div>
        ) : null}
      </PortfolioLayout>
>>>>>>> 204c3d1a2b608cd805bc4c00a5bebc4fbfef700a
    </Layout>
  )
}

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;

  padding-top: 80.25%;

<<<<<<< HEAD
  iframe {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 250px;
    right: 0;
    width: 100%;
    height: 100%;
=======
  p {
    line-height: 1.5;
    padding-top: 40px;
    margin-bottom: 30px;
>>>>>>> 204c3d1a2b608cd805bc4c00a5bebc4fbfef700a
  }
`

export default Blog
