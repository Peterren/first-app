const EventEmitter = require('events');

//Register a listener


const Logger = require('./logger')
const logger = new Logger();

logger.on('messageLogged',(event)=>{
    console.log('listener called',event);
});

logger.log('message')

