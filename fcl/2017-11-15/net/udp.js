const dgram = require(' dgram ');
var debug = require('debug')('log');
const server = dgram.createSocket(' udp4 ');
server.on('message', (msg, rinfo) => {
  debug('log:' + `server got:${msg} from ${rinfo.address}:${rinfo.port}`);
});
server.bind(4333);

