function misha() {
	const [,, input] = process.argv;
	console.log(typeof input);
	for(let i = 1; i < input; i++) {
		console.log(process);
	}	
}

process.on("exit", (code) => {
	console.table("Exiting nahui");
});

misha();