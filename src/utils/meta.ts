export const getMetas = () => {
	let n = ''
	for (let i in navigator) {
		n += navigator[i]
	}
	let w = ''
	for (let i in window) {
		if (i === 'webkitStorageInfo') {
			continue
		}
		w += window[i]
	}
	return n + w
}

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
