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
	overflow: hidden;
	border: solid 10px #111;
`

const Mat = styled.section`
	position: absolute;
	transform: rotate(${v => v.r}deg);
	top: -50%;
	left: -50%;
	width: 200%;
	height: 200%;
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
	left: ${v => v.x}%;
	top: ${v => v.y}%;
	width: ${v => v.w}%;
	height: ${v => v.h}%;
	background-color: #${v => v.c};
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
	const r = props.lain.d256[2] * 360
	const bmax = 100
	const border = {
		bt: props.lain.d256[3] * bmax,
		br: props.lain.d256[4] * bmax,
		bb: props.lain.d256[5] * bmax,
		bl: props.lain.d256[6] * bmax,
	}
	return (
		<Root>
			<Screen {...border}>
				<Mat r={r}>
					<Dimention c={props.lain.hash.substr(0, 6)} x={0} y={0} w={x} h={y} />
					<Dimention
						c={props.lain.hash.substr(10, 6)}
						x={0}
						y={y}
						w={x}
						h={100 - y}
					/>
					<Dimention
						c={props.lain.hash.substr(20, 6)}
						x={x}
						y={0}
						w={100 - x}
						h={y}
					/>
					<Dimention
						c={props.lain.hash.substr(30, 6)}
						x={x}
						y={y}
						w={100 - x}
						h={100 - y}
					/>
				</Mat>
			</Screen>
		</Root>
	)
}

export default C
