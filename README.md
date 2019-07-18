## Echo Challenge
An app that repeats what you say !

### Reflections

Despite the simplicity of this app and how little code was required to build it, I learned significantly:

- The distinction between a CLI and a REPL.

- How to mock and stub an asynchronous function.

### Requirements

- The app runs on the command line.

- It's fine to use Ruby or JavaScript.

- When the app runs you are prompted with a phrase to say something

Example interaction:
```
$ node src/Echo.rb
Say something:
hello, world
7/18/2019, 4:41:44 PM | You said: 'hello, world'!
```

### User Stories

```
As a user
So that I know how to interact with the program
I want the program to prompt me
```

``` 
As a user
So that I can interact with the program
I want the program to wait for user input
```

``` 
As a user
So that I know what time I interacted with the program
I want the program to return my input to the console with a time stamp 
```

### How to use
1. Clone this repo
2. cd into the project
3. `node src/Echo.js` to run the program

### How to test
`jasmine`





