import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
  query($slug: String!) {
    nodeSteelSpecialtyMetalsDoor(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
      relationships {
        field_steel_specialty_metals_doo {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 700) {
                base64
              }
            }
          }
        }
      }
    }
  }
`

const SteelSpecialtyDoor = ({ data }) => {
  //   console.log(data, 'door data')
  return (
    <Layout>
      <h1>template</h1>
    </Layout>
  )
}

export default SteelSpecialtyDoor
