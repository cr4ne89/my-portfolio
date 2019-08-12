import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import styled from 'styled-components'

const PhotosPage = ({ data }) => {
	const photos = data.photos.edges
	const title = photos[0].node.tags
	return (
		<Layout>
			<SEO title="Photos" />
			<Base>
				<Title>{`${title}`}</Title>
				<Container>
					{photos.map(edge => {
						const photo = edge.node
						return (
							<ImageContainer key={photo.slug}>
								<Image>
									<Link to={`/photos/${photo.tags}/${photo.slug}`}>
										<Img sizes={photo.photo.sizes} style={{width: `auto`, height: `100%`}}/>
									</Link>
								</Image>
							</ImageContainer>
						)
					})}
				</Container>
			</Base>
		</Layout>
	)
}

const Base = styled.div`
  max-width: 960px;
	margin: 0px auto;
`

const Title = styled.h2`
  text-align: center;
  line-height: 1.0;
  font-family: sans-serif;
  font-weight: 300;
	font-size: 30px;
	margin: 20px auto 40px;
	letter-spacing: 4px;
	color: #a5a5a5;
	@media (max-width: 600px) {
		font-size: 20px;
		margin: 10px auto 25px;
	}
`

const Container = styled.div`
	max-width: 100%;
  display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: 0px auto;
`

const ImageContainer = styled.div`
	position: relative;
	width: 33.333%;
	&::before {
    padding-top: 100%;
    display: block;
		content: "";
	}
	@media (max-width: 600px) {
		width: 50%;
	}
`

const Image = styled.div`
	padding: 10px;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	overflow: hidden;
	transition: .8s opacity;
	&:hover {
		opacity: 0.5;
	}
	@media (max-width: 600px) {
		padding: 5px;
	}
`

export const query = graphql`
  query($slug: String!) {
    photos: allContentfulPost (
      filter: {tags: {eq: $slug}}
      sort: {fields: slug, order: DESC}
    ) {
      edges {
        node {
          title
					slug
					tags
          photo {
            sizes(maxWidth: 3000) {
              ...GatsbyContentfulSizes
            }
          }
        }
      }
    }
  }
`

export default PhotosPage