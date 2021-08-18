import React from 'react'
import { useStaticQuery, Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

const SteelSpecialMetals = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeMaterials(id: { eq: "a9206b99-2e45-50af-b63e-bebd660051a0" }) {
        title
        body {
          value
        }
        relationships {
          field_materials_images {
            localFile {
              childImageSharp {
<<<<<<< HEAD
                fluid(maxWidth: 1200, maxHeight: 900) {
=======
                fluid(maxWidth: 1575, maxHeight: 700) {
>>>>>>> 204c3d1a2b608cd805bc4c00a5bebc4fbfef700a
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
<<<<<<< HEAD
      allNodeSteelAndSpecialityMetals(sort: { fields: title, order: DESC }) {
=======
      allNodeSteelAndSpecialityMetals {
>>>>>>> 204c3d1a2b608cd805bc4c00a5bebc4fbfef700a
        edges {
          node {
            id
            title
            body {
              value
            }
            fields {
              slug
            }
            relationships {
              field_steel_and_special_metal {
                localFile {
                  childImageSharp {
                    fixed(height: 360, width: 360) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
<<<<<<< HEAD
  const heroImage =
    data.nodeMaterials.relationships.field_materials_images?.[0].localFile
      ?.childImageSharp.fluid
  const bio = data.nodeMaterials.body.value
=======
>>>>>>> 204c3d1a2b608cd805bc4c00a5bebc4fbfef700a

  const heroImage =
    data.nodeMaterials.relationships.field_materials_images[0]?.localFile
      .childImageSharp.fluid
  // console.log(data.allNodeSteelAndSpecialityMetals, 'grab image')
  return (
    <Layout>
<<<<<<< HEAD
      <Container>
        <ContainerImg fluid={heroImage} />
      </Container>
      <About>
        <h1>{data.nodeMaterials.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: bio }}></p>
      </About>

      <FlexContainer>
        {data.allNodeSteelAndSpecialityMetals.edges.map(edge => {
          const links = <Link to={`/${edge.node.fields.slug}`}></Link>
          const images =
            edge.node.relationships.field_steel_and_special_metal[0]?.localFile
              ?.childImageSharp.fixed

          if (links.props.to === '/curtain-wall') {
            return (
              <Link to="/curtain-wall/steel">
                <SetImg fixed={images} />
                <h2>{edge.node.title}</h2>
              </Link>
            )
          }
          return (
            <li>
              <Link to={`/steel-and-specialty-metals/${edge.node.fields.slug}`}>
                <SetImg fixed={images} />
=======
      <About>
        <Img fluid={heroImage} />
        <h1>{data.nodeMaterials.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: data.nodeMaterials.body.value,
          }}
        ></div>
      </About>
      <FlexContainer>
        {data.allNodeSteelAndSpecialityMetals.edges.map(edge => {
          const image =
            edge.node.relationships.field_steel_and_special_metal?.[0].localFile
              .childImageSharp.fixed
          return (
            <li key={edge.node.id}>
              <Link to={`/steel-and-specialty-metals/${edge.node.fields.slug}`}>
                <SetImg fixed={image} />
>>>>>>> 204c3d1a2b608cd805bc4c00a5bebc4fbfef700a
                <h2>{edge.node.title}</h2>
              </Link>
            </li>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

const About = styled.div`
  margin: 0 auto;
  width: 95%;
  padding: 20px;
  h1 {
<<<<<<< HEAD
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-top: 1rem;

=======
    padding-top: 1.4rem;
>>>>>>> 204c3d1a2b608cd805bc4c00a5bebc4fbfef700a
    text-align: center;
  }
  p {
    line-height: 1.6;
    text-align: center;
    color: #848484;
  }
`

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  justify-content: center;
  margin: 90px;
  li {
    list-style-type: none;
    padding: 10px;
  }
  h2 {
    color: #2d385b;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    text-align: left;
    padding-bottom: 15px;
    border-bottom: solid 1px blue;
    width: 190px;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
`

const SetImg = styled(Img)`
  display: block !important;
  margin: 6px;
  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`

export default SteelSpecialMetals
