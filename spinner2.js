const charactors = ["|  ", "/  ", "-  ", "\\  ", "|  ", "/  ", "-  ", "\\  ", "|  "];

let delay = 100;
for (const eachSpin of charactors) {
  setTimeout(() => {
    process.stdout.write(`\r${eachSpin}`);
  }, delay);
  
  delay += 200;
}