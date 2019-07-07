import React from "react"
import { graphql } from "gatsby"

import { SEO, Jumbo, Products } from "../components"
// import styled from 'styled-components'

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              description
              img
              wear
            }
          }
        }
      }
    }
  }
`

/* 
const Button = styled.button`
   width: 100px;
   background-color: #98ca3f;
   border: none;
   border-radius: 10px;
   color: ${props => props.color};
   &:hover {
     cursor: pointer;
     transform: scale(1.03)
   }
 `
 <Button color="gray">Comprar</Button>
*/

const IndexPage = ({data}) => (
  <>
    {console.log(data)}
    <SEO title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description} />
    <Products products={data.allStripeSku.edges} />>
  </>
)

export default IndexPage
