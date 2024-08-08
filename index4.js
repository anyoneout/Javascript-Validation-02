let nameArray = ["Chris", "Jennifer", "Robert", "Adia", "Trincell"];

function tellFortune(nameArray) {
  for (let i = 0; i < nameArray.length; i++) {  
  console.log(nameArray[i]);
    if (nameArray[i].includes("i")) {
    console.log("You will fall in love this week")
    } 
    if (nameArray[i][0] === "R") {
    console.log("You will be rich")
    } 
    if (nameArray[i].length >= 5 && nameArray[i].length <= 7 ) {
    console.log("You will encounter a once-in-a-lifetime opportunity")
    } 
    if (nameArray[i].length < 5) {
    console.log("You will marry within a year")
    } 
    if (nameArray[i].length > 7) {
    console.log("You will marry late in life")
    } 
  }
}
tellFortune(nameArray); 