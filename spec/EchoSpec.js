describe("Echo", function() {
  var Echo = require('../src/Echo');
  var echo;

  beforeEach(function() {
    echo = new Echo();
    console.log = jasmine.createSpy("log");
  });

  it('should greet the user with a prompt', function(){
    //assemble
    //act
    echo.prompt();

    //assert
    expect(console.log).toHaveBeenCalledWith("Say something: ");
  })
  
  
});
    // it("should be able to play a Song", function() {
    //   player.play(song);
    //   expect(player.currentlyPlayingSong).toEqual(song);
  
    //   //demonstrates use of custom matcher
    //   expect(player).toBePlaying(song);
    // });
