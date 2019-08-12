import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ( props ) => (
  <StaticQuery
    query = {graphql`
      query {
        images: allContentfulPost {
          edges {
            node {
              slug
              photo {
                sizes(maxWidth: 3000) {
                  ...GatsbyContentfulSizes
                }
              }
            }
          }
        }
      }
    `}

    render = {( data ) => {
      const image = data.images.edges.find(edge => {
        return edge.node.slug.includes(props.filename)
      })

      if (!image) { return null }
      return (
        <Img alt={props.alt} sizes={image.node.photo.sizes}/>
      )
    }}
  />
)
export default Image