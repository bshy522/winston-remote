var winstonRemote = require('../index').Server;
var winston = require('winston');

winstonServer = winstonRemote.createServer({
    port: 9003
});

winstonServer.listen();

winstonServer.logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)(),
        new winston.transports.File({ filename: './info.log' })
    ]
});
