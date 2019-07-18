function Echo() {
}

Echo.prototype.prompt = function() {
  console.log("Say something: ");
}

Echo.prototype.londonTime = function() {
  var event = new Date();
  var londonDate = event.toLocaleString('en-GB', { timeZone: 'Europe/London' });   
  return londonDate; 
}

Echo.prototype.response = function() {
  var echo = new Echo();
  process.stdin.on('data', function(input) {
    while (input != 'quit') {
      console.log(`${echo.londonTime()} | You said: ${input.toString().trim()}`)
      echo.prompt();
      break;
    } 
    if (input.toString().trim() == 'quit') { 
      console.log('Goodbye')
      process.stdin.pause() 
    };
  })
}

var echo = new Echo();
echo.prompt();
console.log("exit by typing 'quit'");
echo.response();

module.exports = Echo;

