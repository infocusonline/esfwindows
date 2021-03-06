import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    nodeInnovativeSolutionsSubitems(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
      relationships {
        field_innovative_sol_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const InnovativeSolutions = ({ data }) => {
  const body = data.nodeInnovativeSolutionsSubitems.body.value

  return (
    <div>
      <Layout>
        <Layout>
          <Container>
            <h2> {data.nodeInnovativeSolutionsSubitems.title}</h2>
          </Container>
          <BodyContainer
            dangerouslySetInnerHTML={{ __html: body }}
          ></BodyContainer>
        </Layout>
      </Layout>
    </div>
  )
}

const Container = styled.div`
  margin: 0 auto;
  // border: 1px solid red;
  h2 {
    padding-top: 60px;
    padding-left: 40px;
    margin-top: 90px;
  }
`

const BodyContainer = styled.div`
  max-width: 1030px;
  // padding: 120px;
  margin: 0 auto;

  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .flex li {
    list-style-type: none;

    margin: 0 auto;
  }

  p {
    text-align: center;
    padding: 10px;
    margin: 0 auto;
  }
`

export default InnovativeSolutions
