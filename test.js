async function hui(name) {
	const chars = name.split('');
	chars.forEach(async(ch) => {
		await pause(1000);
		console.log('HUI', ch);
	});
	for(let i = 0; i < chars.length; i++) {
		await pause(1000);
		console.log('HUI', chars[i]);
	}
}


async function pause(timeout) {
	return new Promise(resolve => setTimeout(() => {
		console.log("Resolvoing");
		resolve();
	}, timeout));
}

function waiter(timeout) {
	
}
(async() => {
	const result = await hui("hui");
})();