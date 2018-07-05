// @flow
import * as React from 'react'
import type { Lain } from '../../types'

type Props = {
	lain: ?Lain,
}

const styles = {
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		minWidth: '1100px',
		minHeight: '650px',
		backgroundColor: '#eee',
	},

	screen: {
		position: 'absolute',
		left: 'calc(50% - 330px)',
		top: 'calc(50% - 235px)',
		width: '650px',
		height: '450px',
		backgroundColor: '#fff',
		border: 'solid 10px #fff',
		boxShadow: '0 0 20px #444',
		overflow: 'hidden',
	},
}

const C = (props: Props) => (
	<main style={styles.root}>
		<div style={styles.screen}>
			<section class="images">
				<div class="image" />
				<div class="image" />
				<div class="image" />
				<div class="image" />
			</section>
			<section class="paint" />
		</div>
	</main>
)

export default C
