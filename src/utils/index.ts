export const sleep = (msec) =>
	new Promise((resolve) => setTimeout(resolve, msec))

export const now = () => new Date().getTime()
