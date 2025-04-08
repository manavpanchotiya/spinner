const timerIcon = "| / - \\ | / - \\ |";
let timerDelay = 100;

for (const char of timerIcon) {
  setTimeout(() => {
    process.stdout.write('\r' + char + '    ');
  }, timerDelay);

  timerDelay += 300;
}
setTimeout(() => {
  process.stdout.write('\n');
}, timerDelay);