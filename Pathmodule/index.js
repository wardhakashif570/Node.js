const path=require('path');
console.log(path.dirname('C:/Users/wardha/Desktop\Node js/Pathmodule/index.js'));
console.log(path.extname('C:/Users/wardha/Desktop\Node js/Pathmodule/index.js'));
//to find the filename
console.log(path.basename('C:/Users/wardha/Desktop\Node js/Pathmodule/index.js'));
//to find all the things at once
const myPath=path.parse('C:/Users/wardha/Desktop\Node js/Pathmodule/index.js');
console.log(myPath.name);