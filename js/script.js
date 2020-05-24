/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


const timeInterval = 10000; // numerical value in milliseconds

const quotes = [ // Initialize constant with an array of objects containing multiple strings.
  {quote: "This Writing business. Pencils and what-not. Over-rated, if you ask me. Silly stuff. Nothing in it.",
  source: 'A.A. Milne',
  citation: 'Winnie-the-Pooh',
  year: '1926',
  tag:'children story'},
  {quote: 'Believing takes practice.',
  source: "Madeleine L'Engle",
  citation: 'A Wrinkle in Time',
  year: '1962',
  tag:'young adult'},
  {quote: 'And so for a time it looked as if all the adventures were coming to an end; but that was not to be.',
  source: 'C.S. Lewis',
  citation: 'The Lion, the Witch and the Wardrobe',
  year: '1950',
  tag:'young adult'},
  {quote: 'The moment you doubt whether you can fly, you cease forever to be able to do it.',
  source: 'J.M. Barrie',
  citation: 'Peter and Wendy',
  year: '1904'
  },
  {quote: "Sometimes, I've believed as many as six impossible things before breakfast.",
  source: 'Lewis Carroll',
  citation: "Alice's Adventures in Wonderland",
  year: '1865'
  }
];

/*
* Generates random number between 0 and defined upper value.
*
* @param {number} upper - The maximum limit of random number to be provided
* @returns {number} The random number 
*/

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper);
}

/*
 * Returns a random index number for the quotes array.
 *
 * @returns {array[number]} The index number for the array named quotes.
*/

function getRandomQuote() {
  return quotes[getRandomNumber(quotes.length)];
}

/*
* Generates a random number for an RGB color code.
* @returns {number} A number no higher than 255.
*/

function randomRGB() {
  return getRandomNumber(256);
}

/*
* Concatenates and returns a string containing a random RGB color code.
*@returns {string} A random RGB color code value
*/

function randomColor() {
  return `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
}

/*
* Sets a random background color for the entire webpage.
*/

function setRandomBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}
/***
 * Displays a random quote (object) from the quotes array, including various properties from each quote, if available.
***/
function printQuote()  {
  // assigns variables for the function
  let quoteObject = getRandomQuote();
  let html = `<p class="quote">${quoteObject.quote}</p>
  <p class="source">${quoteObject.source}`;
  // conditional statements to check for object properties
  if (quoteObject.citation) {
    html += `<span class="citation">${quoteObject.citation}</span>`;
  }
  if (quoteObject.year) {
    html += `<span class="year">${quoteObject.year}</span>`;
  }
  if (quoteObject.tag) {
    html += `<span class="tag">${quoteObject.tag}</span>`;
  }
  html += `</p>`;
  //sets random background color
  setRandomBackgroundColor();
  // Inserts quote into HTML Div 
  document.getElementById('quote-box').innerHTML = html;
}

setInterval(printQuote, timeInterval); // Automatically refreshes quote and background color every 10 seconds.

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);