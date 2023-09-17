# numberguesser
<b>JavaScript Number guesser </b> <br>
<br>
This was inspired by the LightHouse Labs Kata (stretch) assignment to create a number guessing game in JavaScript from scratch. <br>
The npm prompt-sync package had to be used so that the 'guess' input by the user can be read directly from the command line in node.<br>
(Check out the code for it <a href="https://gist.github.com/glowiep/6fd2affeac4e37c0de1a2b008d16439d">here</a>)

Upon completing the assignment I tinkered around so that the number guessing game works in a browser. <br>
<br>
A few learnings along the way:<br>
<ul>
  <li>
    I decided against linking the JavaScript code that uses the npm package <a href="https://www.npmjs.com/package/prompt-sync">"prompt-sync"</a> to my HTML code.
  </li>
  <li>
    The "prompt-sync" module is primarily intended for use in Node.js environments, to use it in a web browser, another tool to bundle the code may need to be used to make it compatible with the browser environment.
  </li>
</ul>

<a href="https://glowiep.github.io/numberguesser">Check out my number guesser in the browser.</a>

Sources:<br>
[1] <a href="https://codepen.io/lukeandrewreid/full/OVPGXN">CodePen by Luke Reid</a> <br>
[2] <a href="https://simonprickett.github.io/jsnumberguess/">CodePen by Simon Prickett</a> <br>
