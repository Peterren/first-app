const EventEmitter = require('events');
const { emitWarning } = require('process');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',(event)=>{
    console.log('listener called',event);
});

//Raise event, but need listener
emitter.emit('messageLogged',{id: 1, url: 'http://'});

