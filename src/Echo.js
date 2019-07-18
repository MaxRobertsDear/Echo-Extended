function Echo() {
}

Echo.prototype.prompt = function() {
  console.log("Say something: ");
}

Echo.prototype.response = function(input) {
  process.stdin.on('data', function(input) {
    console.log(`You said: ${input.toString().trim()}`)
    process.stdin.pause();
  })
}

module.exports = Echo;

