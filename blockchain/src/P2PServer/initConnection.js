const sockets = require('../data/sockets')
const initMessageHandler = require('./initMessageHandler')
const initErrorHandler = require('./initErrorHandler')
const write = require('./write')
const queryChainLengthMsg = require('./queryChainLengthMsg')

module.exports = (ws) => {
  sockets.push(ws)
  initMessageHandler(ws)
  initErrorHandler(ws)
  write(ws, queryChainLengthMsg())
}
