const os=require('os');
console.log(os.arch());

//to see memory in bytes and then we convert to gb

const mem=os.freemem();
console.log(`${mem /1024/1024/1024}`);
//total memory
const totmem=os.totalmem();
console.log(`${totmem /1024/1024/1024}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());