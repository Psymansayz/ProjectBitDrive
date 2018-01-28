const sockets = require('../data/sockets')
const write = require('./write')

module.exports = (message) => sockets.forEach(socket => write(socket, message))
