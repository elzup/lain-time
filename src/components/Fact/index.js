// @flow
import * as React from 'react'
import type { Lain } from '../../types'
import styled, { keyframes } from 'styled-components'

type Props = {
	lain: ?Lain,
}

const Root = styled.main`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	min-width: 1100px;
	min-height: 650px;
	background-color: #eee;
`

const Screen = styled.div`
	position: absolute;
	left: calc(50% - 330px);
	top: calc(50% - 235px);
	width: 650px;
	height: 450px;
	background-color: #fff;
	border: solid 10px #fff;
	box-shadow: 0 0 20px #444;
	overflow: hidden;
`

const Images = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

const fadeout = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    width: 100%; height: 100%;
    border-radius: 0;
  }
  30% {
    transform: translate(305px, 205px) scale(1);
    width: 40px; height: 40px;
    border-radius: 50%;
  }
  50% {
    transform: translate(305px, 205px) scale(1.3);
    width: 40px; height: 40px;
    border-radius: 50%;
  }
  70% {
    transform: translate(305px, 205px) scale(1);
    width: 40px; height: 40px;
    border-radius: 50%;
  }
  100% {
    transform: translate(-40px, 205px) scale(1);
    width: 40px; height: 40px;
    border-radius: 50%;
  }
`

const showImage = keyframes`
  0%   { width: 0%; }
  100% { width: 100%; }
`

const Image = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 0%;
	height: 100%;
	overflow: hidden;
	&:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 650px;
		height: 450px;
		background-size: cover;
		background-position: center;
	}
	&:nth-child(1):after {
		background-color: hsla(0, 100%, 50%, 1);
		animation: ${showImage} 0.6s ease 1.5s forwards;
	}
	&:nth-child(2):after {
		background-color: hsla(50, 100%, 50%, 1);
		animation: ${showImage} 0.6s ease 1.7s forwards;
	}
	&:nth-child(3):after {
		background-color: hsla(100, 100%, 50%, 1);
		animation: ${showImage} 0.6s ease 1.9s forwards;
	}
	&:nth-child(4):after {
		background-color: hsla(150, 100%, 50%, 1);
		animation: ${showImage} 0.6s ease 2.1s forwards;
	}
`

const Paint = styled.section`
	position: absolute;
	animation: ${fadeout} 1s ease 0.5s forwards;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #444;
`

const C = (props: Props) => (
	<Root>
		<Screen>
			<Images>
				<Image />
				<Image />
				<Image />
				<Image />
			</Images>
			<Paint />
		</Screen>
	</Root>
)

export default C
