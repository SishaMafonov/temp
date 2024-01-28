const prompt = require('prompt-sync')();

function service() {
  console.log("Service starting");
  let running = true;
  while(running) {
    const first = prompt('Enter first value\n');
    const second = prompt('Enter second value\n');
    const sum = prompt('What opertion You would like to perform?\nplus | minus | division | multiplication');
    switch(sum) {
      case "p":
        console.log(`${first} + ${second} = ${first + second}`);
        break;
      case "m":
        console.log(`${first} - ${second} = ${first - second}`);
        break;
      case "d":
        console.log(`${first} / ${second} = ${first / second}`);
        break;
      case "m":
        console.log(`${first} * ${second} = ${first * second}`);
        break;
      default:
        console.log("Sorry I don't know following command", sum);
    }
  }
  const decision = prompt('Do You want to make more calcultion?\nY(es) | N(o)');
  switch(sum) {
      case "Y":
      case "y":
        console.log(`Your with is my command`);
        break;
      case "N":
      case "n":
        console.log(`As You wish master!`);
        running = false;
        break;
      default:
        console.log("Sorry I don't know following command", decision);
  }
}

service();