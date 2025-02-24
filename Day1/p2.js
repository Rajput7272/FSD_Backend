const fs =require('fs');

const data=fs.readFileSync("./p1.js","utf-8");
console.log("I am before Reading");
console.log(data);