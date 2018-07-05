export const getMetas = () => {
	let n = ''
	for (let i in navigator) {
		n += navigator[i]
	}
	let w = ''
	for (let i in window) {
		w += window[i]
	}
	return n + w
}
