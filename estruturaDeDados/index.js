/* 
function FirstFactorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * FirstFactorial(num - 1);
  }
}  
// keep this function call here 
console.log(FirstFactorial(readline(1)));




function CodelandUsernameValidation(str) { 
  this.str = ['a','/','-','z','A','-','Z','__','_', 'u__hello_world123','aa_']
  if(str.length >= 4 && str.length <= 25) {
    return true
  }else {
    return false;
  }
    // code goes here  
  
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));
 */

function LongestWord(sen) {
  this.sen = split("");
  // code goes here  
  return sen.sort((a, b) => b.lenght - a.lenght)[0];
}

// keep this function call here 
console.log(LongestWord(readline()));


function FirstReverse(str) {
  let splitString = str.split("");
  str = splitString.reverse();
  str = splitString.join("");
  // code goes here  
  return str;

}

// keep this function call here 
console.log(FirstReverse(readline()));

let a = strArr[0].split(', ');
let b = strArr[1].split(', ');
let result = a.filter(x => b.find(a => a === x));
return result.length > 0 ? result.join(',') : 'false';


// keep this function call here 
console.log(FindIntersection(readline()));

function QuestionsMarks(str) {
  res = false;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (Number(str[i]) + Number(str[j]) === 10) {
        res = true;
        if (str.slice(i, j).split("?").length - 1 < 3) {
          return false;
        }
      }
    }
  }
  return res;
}