// function bad(arr: number[]) {
//   for (const i in arr) {
//     for (const j in arr) {
//       if (arr[i] === arr[j] && i !== j) {
//         return arr[i];
//       }
//     }
//   }
// }

function firstRecurringCharacter(arr: number[]) {
  let haveSeen = {};
  for (const num of arr) {
    if (haveSeen[num]) return num;
    haveSeen[num] = 1;
  }
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]));
