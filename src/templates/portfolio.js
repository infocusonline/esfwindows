import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/HomePage/Layout'
import Img from 'gatsby-image'
import Head from '../components/HomePage/Head'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'

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
      <PortfolioLayout>
        <Carousel
          autoPlay
          showThumbs={false}
          infiniteLoop={true}
          dynamicHeight={true}
        >
          {data.nodeBlog.relationships.field_blog_image.map(image => {
            const about = data.nodeBlog.body.value

            console.log(image, 'get the image here')
            const portfolioImages = image.localFile?.childImageSharp?.fluid
            return (
              <>
                <div>
                  {portfolioImages ? <Img fluid={portfolioImages} /> : null}
                </div>
                <div className="work">
                  <h3 dangerouslySetInnerHTML={{ __html: about }}></h3>
                </div>
              </>
            )
          })}
        </Carousel>
      </PortfolioLayout>
    </Layout>
  )
}

// //  <Head title={data.nodeBlog.title} />
// <h1>{data.nodeBlog.title}</h1>
// {image ? (
//   <div>
//     <Img fluid={image} />
//     <p dangerouslySetInnerHTML={{ __html: post.body.value }}></p>
//   </div>
// ) : null}

const PortfolioLayout = styled.div`
  max-width: 89 0px;
  /* margin: 0 auto; */
  padding-top: 100px;
  h1 {
    text-align: center;
  }

  p {
    line-height: 1.5;
    margin-top: 30px;
  }
`

export default Blog
