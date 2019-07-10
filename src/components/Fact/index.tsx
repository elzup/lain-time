import * as React from 'react'
import { Ego } from '../../types'
import styled, { keyframes } from 'styled-components'
import _ from 'lodash'
import config from '../../config'
const { size } = config

type Props = {
	ego: Ego
}

const Root = styled.div`
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

const Dimention = styled.div`
	position: absolute;
	left: ${v => v.x}%;
	top: ${v => v.y}%;
	width: ${v => v.w}%;
	height: ${v => v.h}%;
	overflow: hidden;
	transform: rotate(${v => v.r}deg);
`

const kaos = p => keyframes`
  0% {
		background: linear-gradient(
			${p.r[0]}deg,
			#${p.c[0]} ${p.h[0]}%,
			transparent ${p.h[0]}%
		)
		${p.h[5]}px 0,
		linear-gradient(${p.r[1]}deg, transparent 74%, #${p.c[1]} 78%),
		linear-gradient(
			${p.r[2]}deg,
			transparent ${p.h[1]}%,
			#${p.c[2]} ${p.h[2]}%,
			#${p.c[3]} ${p.h[3]}%,
			transparent ${p.h[4]}%
		),
		#${p.c[4]};
		background-size: ${p.h[6] * 10}px ${p.h[7] * 10}px;
  }
  100% {
		background: linear-gradient(
			${p.r[1]}deg,
			#${p.c[1]} ${p.h[1]}%,
			transparent ${p.h[1]}%
		)
		${p.h[6]}px 0,
		linear-gradient(${p.r[2]}deg, transparent 74%, #${p.c[2]} 78%),
		linear-gradient(
			${p.r[3]}deg,
			transparent ${p.h[2]}%,
			#${p.c[3]} ${p.h[3]}%,
			#${p.c[4]} ${p.h[4]}%,
			transparent ${p.h[5]}%
		),
		#${p.c[5]};
		background-size: ${p.h[7] * 10}px ${p.h[0] * 10}px;
  }
`

const Content = styled.div`
	margin: -50%;
	width: 200%;
	height: 200%;
	transform: rotate(${p => p.r[3]}deg);
	animation: ${kaos} ${p => p.h[1]}s linear 0s infinite forwards;
`

const C = (props: Props) => {
	const x = props.ego.d256[0] * 100
	const y = props.ego.d256[1] * 100
	const r = props.ego.d256[2] * 360
	// const x = 50
	// const y = 50
	// const r = 0

	const bmax = 100
	const border = {
		bt: props.ego.d256[3] * bmax,
		br: props.ego.d256[4] * bmax,
		bb: props.ego.d256[5] * bmax,
		bl: props.ego.d256[6] * bmax,
	}
	const ds = [0, 1, 2, 3].map(i => {
		const hs = _.range(10).map(j => props.ego.d256[(i * 8 + j + 1) % 40] * 100)
		hs.sort((a, b) => a - b)

		return {
			c: _.range(10).map(j => props.ego.hash.substr((i * 10 + j) % 34, 6)),
			r: _.range(10).map(j => props.ego.d256[(i * 8 + j) % 40] * 360),
			h: _.range(10).map(j => props.ego.d256[(i * 8 + j + 2) % 40] * 100),
			hs,
		}
	})
	return (
		<Root>
			<Screen {...border}>
				<Mat r={r}>
					<Dimention x={0} y={0} w={x} h={y}>
						<Content {...ds[0]} />
					</Dimention>
					<Dimention x={0} y={y} w={x} h={100 - y}>
						<Content {...ds[1]} />
					</Dimention>
					<Dimention x={x} y={0} w={100 - x} h={y}>
						<Content {...ds[2]} />
					</Dimention>
					<Dimention x={x} y={y} w={100 - x} h={100 - y}>
						<Content {...ds[3]} />
					</Dimention>
				</Mat>
			</Screen>
		</Root>
	)
}

export default C
