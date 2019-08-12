import React from "react"
import styled from "styled-components"

const Footer = () => (
	<Base>
		<Copy>
			<small>&copy; Tsuruoka Yusuke</small>
		</Copy>
	</Base>
)

const Base = styled.footer`
	max-width: 960px;
	margin: 0 auto;
`

const Copy = styled.div`
	display: flex;
	justify-content: center;
	font-size: 12px;
	margin-top: 10px;
	padding: 10px;
`

export default Footer