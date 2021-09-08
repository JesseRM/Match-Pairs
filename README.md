# Match-Pairs
A game where pairs of identical cards have to be matched.  User clicks on a card revealing the card which can be a picture, number or word.
User has to find its identical pair on the next click, else the card is hidden again.  User has a few options such as choosing 
grid size, value type and time limit.

Some of the objectives of this project were to attempt to employ OOP principles and modularize the code.  Classes were used as well as 
import/export (ES6) to organize code into different files.  Some the the main challenges of this project were having the cards and their values appear in the correct locations as well as having them adjust depending on viewport size, loading pictures using promises to ensure
everything was loaded prior to drawing on canvas element and employing a time limit.

## Usage
[Live Demo](http://matchpairs.herokuapp.com/)

Simply match all pairs to win the game.  If time limit is set, user must match all pairs within the given time to win the game.
Click on 'Play Game' at any time to begin a new game.

## Technologies
1. HTML
2. Javascript (ES6)
3. CSS
4. Webpack
5. Node.js
6. Express

## Project Status
Core functionality of the game is complete.  Possible future additions are sound and minor adjustments to responsiveness on diffferent 
viewports.
