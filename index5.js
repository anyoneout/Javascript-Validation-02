

function willMarryLate(myName1) {
  if (myName1.length > 7) {
    return "You will marry late in life";
  } return "You won't marry late in life";
}
function willMarryEarly(myName1) {
  if (myName1.length < 5) {
    return "You will marry within a year";
  } return "You won't marry within a year";
}
function onceInALifetime(myName1) {
  if (myName1.length >= 5 && myName1.length <= 7 ) {
    return "You will encounter a once-in-a-lifetime opportunity";
  } return "You won't encounter a once-in-a-lifetime opportunity";
}
function willBeRich(myName1) {
  if (myName1[0] === "R") {
    return "You will be rich";
  } return "You won't be rich";
}
function willFallInLove(myName1) {
  if (myName1.includes("i")) {
    return "You will fall in love this week";
  } return "You won't fall in love this week";
}

function tellFortune(myName1) {
  console.log(willFallInLove(myName1));
  console.log(onceInALifetime(myName1));
  console.log(willMarryLate(myName1));
  console.log(willMarryEarly(myName1)); 
  console.log(willBeRich(myName1));
}


tellFortune("Chris");


