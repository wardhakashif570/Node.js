const { ENGINE_METHOD_PKEY_ASN1_METHS } = require('constants');
const EventEmitter=require('events');
//const event=require("events");
const event=new EventEmitter();



// event.on('myname',()=>{
//     console.log('my name is wardha ');
// })


// event.on('myname',()=>{
//     console.log('my name is kashif ');
// })

// event.on('myname',()=>{
//     console.log('my name is Ahmed ');
// })

event.on('checkPage',(sc,msg)=>{
console.log(`status code is ${sc} and the page is ${msg}`)
})
event.emit("checkPage",200,"ok");
