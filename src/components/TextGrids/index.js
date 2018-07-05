// @flow
import * as React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import type { TextBlock } from '../../types'

const styles = {
	blockText: {
		margin: '5px',
		marginTop: '10px',
		borderRadius: '5px',
		background: '#ddd',
		border: 'solid 1px #aaa',
	},
}

type Props = {
	block: TextBlock,
}

const visible = (text: string) => text.replace(/[\s　]/g, '_')

const TextGrids = (props: Props) => {
	const { block } = props
	const textParts = block.text.split('\n')
	return (
		<React.Fragment>
			{textParts.map((tp, i) => {
				const hasNext = i < textParts.length - 1
				const text = visible(tp + (hasNext ? '↩' : ''))
				return (
					<React.Fragment key={i}>
						{text && (
							<Grid item style={styles.blockText} key={i}>
								<Typography
									variant="subheading"
									gutterBottom
									style={{
										marginTop: '20px',
										background: 'white',
									}}
								>
									{text}
								</Typography>
							</Grid>
						)}
						{hasNext && <Grid key={`br-${i}`} item xs={12} />}
					</React.Fragment>
				)
			})}
		</React.Fragment>
	)
}

export default TextGrids
