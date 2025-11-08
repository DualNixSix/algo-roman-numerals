const romanNumeralToArabic = {
  I:1,
  V:5,
  X:10,
  L:50,
  C:100,
  D:500,
  M:1000
}

const romanNumeralPriorityOrder = ['M','D','C','L','X','V','I'];
  
function toRomanLazy(num) {
  let output = ""
  for (let r = 0; r < romanNumeralPriorityOrder.length; r++) {  // r = iterates; r++ counts
    let romanLetter = romanNumeralPriorityOrder[r];  // takes the output of the iteration 
    let letterPrint = Math.floor(num / romanNumeralToArabic[romanLetter]);     // num / value of roman numeral priority that r represents 
    let remainingNum = num - (romanNumeralToArabic[romanLetter] * letterPrint);

    console.log(remainingNum);

      }

    }

function toRoman(num) {
  return "";
}

toRomanLazy(565);

module.exports = { toRoman, toRomanLazy };
