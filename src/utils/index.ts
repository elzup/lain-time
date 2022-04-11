export const look = (msec) => {
	let del: NodeJS.Timeout | null = null
	const info = () =>
		new Promise((resolve) => {
			del = setTimeout(resolve, msec)
		})

	return { info, del }
}

export const end = () => {}
export const sign = () => new Date().getTime()
