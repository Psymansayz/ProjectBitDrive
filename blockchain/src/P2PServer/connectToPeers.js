const WebSocket = require('ws')
const initConnection = require('./initConnection')

module.exports = (newPeers) => {
  newPeers.forEach((peer) => {
    const ws = new WebSocket(peer)
    ws.on('open', () => initConnection(ws))
    ws.on('error', () => {
      console.log('connection failed')
    })
  })
}
