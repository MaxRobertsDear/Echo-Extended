function Echo() {
}

Echo.prototype.prompt = function() {
  console.log("Say something: ");
}

module.exports = Echo;

// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };