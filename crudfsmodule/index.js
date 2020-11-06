const fs=require("fs");

//To create a folder

//fs.mkdirSync('crud');

//writeFileSync is a method if we write something it completely replace 

fs.writeFileSync("crud/bio.txt","mustafa");

fs.appendFileSync("crud/bio.txt"," student of class 9")

const data=fs.readFileSync("crud/bio.txt","utf8");  //utf8 is used if we dont want to show buffer value
console.log(data);


 fs.renameSync('crud/bio.txt','crud/home.txt');

 //to delete a file
fs.unlinkSync('crud/home.txt');``


 //to delete a folder
 fs.rmdirSync('crud');
 