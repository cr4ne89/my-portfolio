import { Link } from "gatsby"
import React from "react"
import styled from "styled-components";
import Image from "../components/image"

const Header = ({ data }) => (
  <Base>
    <Logo>
      <Image filename="Logo2" alt="Logo" />
    </Logo>
    <Title>
      <Link to="/" >
        Portfolio
      </Link>
    </Title>
    <Nav>
      <NavItems>
        <NavItem>
          <Link to="/#about/">About</Link> 
        </NavItem>
        <NavItem>
          <Link to="/#photos">Photos</Link>
        </NavItem>
        <NavItem>
          <Link to="/#contact">Contact</Link>
        </NavItem>
      </NavItems>
    </Nav>
  </Base>
)

const Base = styled.header`
  height: 130px;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #FFFFFF;
  @media (max-width: 700px) {
    height: 100px;
    justify-content: center;
  }
`

const Logo = styled.div`
  width: 120px;
  @media (max-width: 650px) {
    width: 80px;
  }
`

const Title = styled.h1`
  font-size: 28px;
  letter-spacing: 1.5px;
  padding-top: 30px;
  @media (max-width: 650px) {
    font-size: 20px;
  }
  a {
    text-decoration: none;
    color: #333333;
  }
`

const Nav = styled.nav`
  margin-left: auto;
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
	@media (max-width: 700px) {
    display: none;
  }
  a {
    text-decoration: none;
    color: #333333;
  }
`

const NavItems = styled.ul`
`

const NavItem = styled.li`
  font-size: 17px;
  display: inline;
  margin-right: 30px;
  padding: 10px;
  transition: .8s opacity;
  &:hover {
		opacity: 0.6;
	}
`

export default Header
