// Create 3 if-statements to test the following...
// name is longer than 7 characters
// name is shorter than 5 characters
// name is between 5 and 7 characters (inclusive)
// first letter is 'R'
// contains an 'i' (hint: check out match or includes)
// NOTE: you don't need to do all of these steps in order. It may be easier to take them one-at-a-time.



console.log("hello from index.js");

myName = "Chris";

let lengthOfName = myName.length;

if (lengthOfName > 7) {
  console.log("You will marry late in life")
}

if (lengthOfName < 5) {
  console.log("You will marry within a year")
}

if (lengthOfName >= 5 && lengthOfName <= 7 ) {
  console.log("You will encounter a once-in-a-lifetime opportunity")
}

if (myName[0] === "R") {
  console.log("You will be rich")
}

if (myName.includes("i")) {
  console.log("You will fall in love this week")
}