function Echo() {
}

Echo.prototype.prompt = function() {
  console.log("Say something: ");
}

Echo.prototype.response = function() {
  process.stdin.on('data', function(input) {
    var event = new Date();
    var londonDate = (event.toLocaleString('en-GB', { timeZone: 'Europe/London' }));    
    console.log(`${londonDate} | You said: ${input.toString().trim()}`)
    process.stdin.pause();
  })
}

module.exports = Echo;

