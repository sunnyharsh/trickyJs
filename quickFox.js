// function nonRepeterLetter() {
//     var x = "the quick brown fox jumps then quickly blow air"
//     var charArr = x.split("");
//     var wordArr = x.split(" ");
//     let isDone = true
//     wordArr.forEach((obj) => {
//         let getLetter = obj.substring(0, 1)
//         let count = charArr.filter((o) => getLetter === o).length;
//         if (count == 1 && isDone) {
//             isDone = false;
//             console.log(getLetter)
//         }

//     })

// }
// nonRepeterLetter();
// str = "the quick brown fox jumps then quickly blow air";
// let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split('');

// const firstNonRepeatingLetterInString = (alphabetArr, str) => {
//   let strLen = '';
//   let strIndex = '';
//   alphabetArr.filter( (val) => {
//     strLen = str.toLowerCase().split(val).length-1 + ' => ' + val;
//     strIndex = strLen.indexOf(val)
//     if(str.toLowerCase().split(val).length-1 == 1){
//       if(strIndex > strLen.indexOf(val)){
//         strIndex = strLen.indexOf(val);
//       }
//     }
//   })
// }
// console.log(firstNonRepeatingLetterInString(alphabetArr, str))

let str = "the quick brown fox jumps then quickly blow air";
let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split('');
const firstNonRepeatingLetterInString = (alphabetArr, str) => {
  let strLen = '';
  let strIndex = '';
  alphabetArr.filter((val) => {
    strLen = str.toLowerCase().split(val).length - 1 + ' => ' + val;
    strIndex = strLen.indexOf(val)
    if (str.toLowerCase().split(val).length - 1 == 1) {
      if (strIndex > strLen.indexOf(val)) {
        strIndex = strLen.indexOf(val);
      }
    }
  })
}
console.log(firstNonRepeatingLetterInString(alphabetArr, str))