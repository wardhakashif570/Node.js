const fs=require("fs");
//creating new file
fs.writeFileSync('read.txt',"hello world");

fs.writeFileSync('read.txt',"hello world, hi");

//to add more data in the file
fs.appendFileSync('read.txt', " Web development Basics");


//to read data
const buf_data= fs.readFileSync('read.txt');
console.log(buf_data);

const str=buf_data.toString();
console.log(str);


//to rename file
fs.renameSync('read.txt','readwrite.txt');