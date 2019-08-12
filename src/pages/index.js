import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Image from '../components/image'
import styled from 'styled-components'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Cover>
      <Image filename='DSCF1136' alt='cover'/>
    </Cover>
    <Section>
      <SectionTitle id='about'>About</SectionTitle>
      <About>Thank you for visiting my portfolio.</About>
      <About>All photos were taken by me.</About>
    </Section>
    <Section>
      <SectionTitle id='photos'>Photos</SectionTitle>
        <SectionContainer>
          <SectionItem>
            <Link to='/photos/portrait' style={{ textDecoration: `none` }}>
              <Image filename='DSCF1978' alt='portrait' />
              <ImageTitle>portrait</ImageTitle>
            </Link> 
          </SectionItem>
          <SectionItem>
            <Link to='/photos/snap' style={{ textDecoration: `none` }}>
              <Image filename='DSCF0551' alt='snap' />
              <ImageTitle>snap</ImageTitle>
            </Link>
          </SectionItem>
          <SectionItem>
            <Link to='/photos/flower' style={{ textDecoration: `none` }}>
              <Image filename='DSCF0930' alt='flower' />
              <ImageTitle>flower</ImageTitle>
            </Link>
          </SectionItem>
        </SectionContainer>
    </Section>
    <Section>
      <SectionTitle id='contact'>Contact</SectionTitle>
      <SocialIconList>
        <a target='_blank' rel='noopener' href='https://www.instagram.com/trrrrok89/'>
          <FontAwesomeIcon icon={['fab', 'instagram']} size='2x'/>
        </a>
        <a target='_blank' rel='noopener' href='https://twitter.com/trrrrok89/'>
          <FontAwesomeIcon icon={['fab', 'twitter']} size='2x'/>
        </a>
        <a target='_blank' rel='noopener' href='https://www.facebook.com/yusuke.tsuruoka.75'>
          <FontAwesomeIcon icon={['fab', 'facebook']} size='2x'/>
        </a>
      </SocialIconList>
    </Section>
  </Layout>
)

const Section = styled.section`
  max-width: 960px;
  margin: 10px auto;
  padding: 10px 0;
  background: rgb(247, 247, 247);
`

const SectionTitle = styled.h1`
  text-align: center;
  font-size: 20px;
  letter-spacing: 1.5px;
  line-height: 1.0;
  @media (max-width: 600px) {
    font-size: 20px;
	}
`

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
	margin: 40px 100px;
	@media (max-width: 600px) {
    margin: 20px 20px;
    flex-direction: column;
    align-content: center;
	}
`

const SectionItem = styled.div`
  width: 30%;
  transition: .8s opacity;
	&:hover {
		opacity: 0.6;
	}
  @media (max-width: 600px) {
    width: 50%;
    margin: 10px auto;
	}
`

const ImageTitle = styled.h3`
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  color: #a5a5a5;
  letter-spacing: 5px;
  font-size: 100%;
  @media (max-width: 600px) {
    font-size: 50%;
	}
`

const About = styled.p`
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  color: #a5a5a5;
  letter-spacing: 1px;
  font-size: 100%;
  @media (max-width: 600px) {
    font-size: 50%;
  }
`

const SocialIconList = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px 300px;
  @media (max-width: 600px) {
    padding: 20px 100px;
    font-size: 10px;
  }
  a {
    color: #000;
    text-decoration: none;
    transition: .8s opacity;
    &:hover {
      opacity: 0.5;
      color: #55acee;
    }
  }
`

const Cover = styled.nav`
  width: 100vw;
  max-height: 450px;
  overflow: hidden;
  margin: 30px 0;
  @media (max-width: 1400px) {
    max-height: 300px;
  }
  @media (max-width: 900px) {
    max-height: 200px;
  }
  @media (max-width: 650px) {
    max-height: 120px;
    margin: 15px 0;
  }
`

export default IndexPage
