import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

class PhotoPage extends React.Component {
	render() {
		const photo = this.props.data.contentfulPost
		const { previous, next } = this.props.pageContext

		return (
			<Base>
				<Title>
					<Link to={`/photos/${photo.tags}`}>
						{`${photo.tags}`}
					</Link>
				</Title>
				<Container>
					<Arrow>
						{previous && (
							<Link to={`/photos/${photo.tags}/${previous.slug}`} rel="previous">
								＜
							</Link>
						)}
					</Arrow>
					<Image>
						<Img sizes={photo.photo.sizes}/>
					</Image>
					<Arrow>
						{next && (
							<Link to={`/photos/${photo.tags}/${next.slug}`} rel="next">
								＞
							</Link>
						)}
					</Arrow>
				</Container>
			</Base>
		)
	}
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
	margin: 40px 0;
	letter-spacing: 4px;
	transition: .8s opacity;
	a {
		text-decoration: none;
		color: #a5a5a5;
	}
	&:hover {
		opacity: 0.5;
	}
	@media (max-width: 600px) {
		font-size: 20px;
		margin: 30px 0;
	}
`

const Container = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 auto;
`

const Image = styled.div`
	width: 80%;
`

const Arrow = styled.div`
	font-size: 25px;
	transition: .8s opacity;
	a {
		text-decoration: none;
		color: #a5a5a5;
	}
	&:hover {
		opacity: 0.5;
	}
	@media (max-width: 600px) {
		font-size: 20px;
	}
`

export const query = graphql`
	query($slug: String!) {
		contentfulPost(slug: {eq: $slug}) {
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
`

export default PhotoPage