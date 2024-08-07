
myName = "";
lengthOfName = myName.length;

function willMarryLate() {
  if (lengthOfName > 7) {
    console.log("You will marry late in life")
  }
}

function willMarryEarly() {
  if (lengthOfName < 5) {
    console.log("You will marry within a year")
  }
}

function onceInALifetime() {
  if (lengthOfName >= 5 && lengthOfName <= 7 ) {
    console.log("You will encounter a once-in-a-lifetime opportunity")
  }
}

function willBeRich() {
  if (myName[0] === "R") {
    console.log("You will be rich")
  }
}

function willFallInLove() {
  if (myName.includes("i")) {
    console.log("You will fall in love this week")
  }
}

function tellFortune(myName) {
  onceInALifetime();
  willMarryLate();
  willMarryEarly();
  willBeRich();
  willFallInLove();
  
}

tellFortune(Jen);