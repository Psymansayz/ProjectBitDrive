const sockets = require('../data/sockets')

module.exports = (ws) => {
  const closeConnection = (ws) => {
    console.log(`connection failed to peer: ${  ws.url}`)
    sockets.splice(sockets.indexOf(ws), 1)
  }
  ws.on('close', () => closeConnection(ws))
  ws.on('error', () => closeConnection(ws))
}
