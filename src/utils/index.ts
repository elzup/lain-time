export function sleep(msec: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, msec))
}

export const now = () => new Date().getTime()
