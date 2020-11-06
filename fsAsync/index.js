const fs=require("fs");
fs.writeFile("home.txt","warda",(err)=>{
    console.log("file is created")
});
//to add more data in the file

fs.appendFile('home.txt'," kashif",(err)=>{
    console.log('task completed');
})

//to read data
fs.readFile('home.txt',"utf8",(err,data)=>{
console.log(data);
})

//to delete
fs.unlink('home.txt',(err)=>{
 console.log("deleted")
}
)