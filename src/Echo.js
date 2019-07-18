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
  process.stdin.on('data', function(input) {
    var echo = new Echo();
    console.log(`${echo.londonTime()} | You said: ${input.toString().trim()}`)
    process.stdin.pause();
  })
}

module.exports = Echo;

