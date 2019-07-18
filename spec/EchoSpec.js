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

  it('should return user input to the console', function() {
    //assemble
    var stdin = require('mock-stdin').stdin();
    //act
    echo.response();
    stdin.send("Hello World");
    var event = new Date();
    var londonDate = (event.toLocaleString('en-GB', { timeZone: 'Europe/London' }));
    //assert
    expect(console.log).toHaveBeenCalledWith(`${londonDate} | You said: Hello World`);
  })

  it('should return user input to the console', function() {
    //assemble
    var stdin = require('mock-stdin').stdin();
    //act
    echo.response();
    stdin.send("Today is Thursday");
    var event = new Date();
    var londonDate = (event.toLocaleString('en-GB', { timeZone: 'Europe/London' }));
    //assert
    expect(console.log).toHaveBeenCalledWith(`${londonDate} | You said: Today is Thursday`);
  })

});
