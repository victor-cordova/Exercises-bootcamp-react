const createId = (): number => {
	const max: number= 9999999;
	const min: number= 100000;
	return Math.floor(Math.random() * (max - min) + min);
}

export {
	createId,
}
