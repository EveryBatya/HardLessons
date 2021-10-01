let num = 266219;
let numStr = String(num);
let res = 1;

for (let i = 0; i < numStr.length; i++) res *= +numStr[i];

let resStr = String(res **3);

console.log(resStr.slice(0, 2));
