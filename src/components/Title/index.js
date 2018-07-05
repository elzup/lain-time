// @flow
import * as React from 'react'
import Typography from '@material-ui/core/Typography'

type Props = {
	icon: any,
	text: string,
}

const Title = (props: Props) => (
	<Typography variant="headline" component="h2">
		{props.icon}
		{props.text}
	</Typography>
)

export default Title
