const WebSocket = require('ws')
const initConnection = require('./initConnection')
const p2pPort = process.env.P2P_PORT || 6001

module.exports = () => {
  const server = new WebSocket.Server({port: p2pPort})
  server.on('connection', ws => initConnection(ws))
  console.log(`listening websocket p2p port on: ${p2pPort}`)
}
