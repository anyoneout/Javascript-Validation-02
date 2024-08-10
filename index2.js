
function nameLessThanSeven(aName) {
  if (aName.length > 7) {
    return true;
  } else {
    return false;
  }
}


function nameGreaterThan5(aName) {
  if (aName.length < 5) {
    return true;
  } else {
    return false;
  }
}

function nameBetweenFiveAndSeven(aName) {
  if (aName.length >= 5 && aName.length <= 7 ) {
    return true;
  } else {
    return false;
  }
}

function startsWithR(aName) {
  if (aName[0] === "R") {
    return true;
  } else {
    return false;
  }
}

function hasAnI(aName) {
  if (aName.includes("i")) {
    return true;
  } else {
    return false;
  }
}


function tellFortune(aName) {
  let a = nameLessThanSeven(aName);
  let b = nameGreaterThan5(aName);
  let c = nameBetweenFiveAndSeven(aName);
  let d = startsWithR(aName);
  let e = hasAnI(aName);

  if(a) {
    console.log(`${aName} You will marry late in life.`)
  } else {
    console.log(`${aName} You will die alone.`)
  }
  if(b) {
    console.log(`${aName} You will marry within a year.`)
  } else {
    console.log(`${aName} You will date fruitlessly.`)
  }
  if(c) {
    console.log(`${aName} You will encounter a once in a lifetime opportunity.`)
  } else {
    console.log(`${aName} You will encounter a twice in a lifetime opportunity.`)
  }
  if(d) {
    console.log(`${aName} You will be rich.`)
  } else {
    console.log(`${aName} You will be "Rich" after a name change.`)
  }
  if(e) {
    console.log(`${aName} You will fall in love this week.`)
  } else {
    console.log(`${aName} You will fall down the stairs this week.`)
  }
}

tellFortune("Cat");
tellFortune("Katrina");
tellFortune("Carissa");
tellFortune("Reba");
