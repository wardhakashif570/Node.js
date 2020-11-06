const fs=require("fs");

const bioData={
    name:"wardha",
    age:26,
    channel:"wardha technolgy"
}
// const jsonData=JSON.stringify(bioData);
// console.log(jsonData);
// //jsonData.property we cannot do this in jsonData
// //to convert json into object
// const objData=JSON.parse(jsonData);
// console.log(objData);
// console.log(objData.channel);

//1.convert to JSON -->done
//2.Add into other file
//3.readfile
//4.again convert back to js obj original
//5.show in console


const jsonData=JSON.stringify(bioData);
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("done");
// });

fs.readFile('json1.json',"utf-8",(err,data)=>{
    console.log(data);
    const objData=JSON.parse(data);
    console.log(objData);  
})




