// @flow
import * as React from 'react'
import type { Lain } from '../../types'
import styled, { keyframes } from 'styled-components'

type Props = {
	lain: Lain,
}

const size = 400

const Root = styled.main`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	min-width: ${size}px;
	min-height: ${size}px;
	background-color: #210703;
`

const Screen = styled.div`
	position: absolute;
	left: calc(50% - ${size / 2}px);
	top: calc(50% - ${size / 2}px);
	width: ${size}px;
	height: ${size}px;
	background-color: #fff;
	border: solid 10px #fff;
	overflow: hidden;
`

const Mat = styled.section`
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

const Dimention = styled.div`
	position: absolute;
	width: ${size}px;
	height: ${size}px;
	left: ${v => v.x}%;
	top: ${v => v.y}%;
	width: ${v => v.w}%;
	height: ${v => v.h}%;
	&:nth-child(1) {
		background-color: hsla(0, 100%, 50%, 1);
		// animation: ${showImage} 0.6s ease 1.5s forwards;
	}
	&:nth-child(2) {
		background-color: hsla(50, 100%, 50%, 1);
		// animation: ${showImage} 0.6s ease 1.7s forwards;
	}
	&:nth-child(3) {
		background-color: hsla(100, 100%, 50%, 1);
		// animation: ${showImage} 0.6s ease 1.9s forwards;
	}
	&:nth-child(4) {
		background-color: hsla(150, 100%, 50%, 1);
		// animation: ${showImage} 0.6s ease 2.1s forwards;
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

const C = (props: Props) => {
	const x = props.lain.d256[0] * 100
	const y = props.lain.d256[1] * 100
	return (
		<Root>
			<Screen>
				<Mat>
					<Dimention x={0} y={0} w={x} h={y} />
					<Dimention x={0} y={y} w={x} h={100 - y} />
					<Dimention x={x} y={0} w={100 - x} h={y} />
					<Dimention x={x} y={y} w={100 - x} h={100 - y} />
				</Mat>
			</Screen>
		</Root>
	)
}

export default C
