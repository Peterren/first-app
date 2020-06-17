const EventEmitter = require('events');
const { emitWarning } = require('process');
const emitter = new EventEmitter();

//Register a listener
emitter.on('messageLogged',function(){console.log('listener called');
});

//Raise event, but need listener
emitter.emit('messageLogged');

