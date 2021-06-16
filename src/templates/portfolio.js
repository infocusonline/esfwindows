import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/HomePage/Layout'
import Img from 'gatsby-image'
import Head from '../components/HomePage/Head'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const query = graphql`
  query($slug: String!) {
    nodeBlog(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      created
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
  console.log(data.nodeBlog, 'loop through images')
  const post = data.nodeBlog
  // const image =
  //   data.nodeBlog.relationships.field_blog_image[0]?.localFile?.childImageSharp
  //     ?.fluid
  // console.log(image, 'hreer is the image')
  return (
    <Layout>
      <Head title={data.nodeBlog.title} />
      <Carousel
        autoPlay
        showStatus={true}
        showThumbs={false}
        showArrows={true}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        {data.nodeBlog.relationships.field_blog_image.map(image => {
          const about = data.nodeBlog.body.value

          // console.log(image, 'get the image here')
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
    </Layout>
  )
}

export default Blog
