const MessageType = require('../data/MessageType')
const write = require('./write')
const responseLatestMsg = require('./responseLatestMsg')
const handleBlockchainResponse = require('./handleBlockchainResponse')
const responseChainMsg = require('./responseChainMsg')

module.exports = (ws) => {
  ws.on('message', (data) => {
    const message = JSON.parse(data)
    console.log(`Received message${  JSON.stringify(message)}`)
    switch (message.type) {
    case MessageType.QUERY_LATEST:
      write(ws, responseLatestMsg())
      break
    case MessageType.QUERY_ALL:
      write(ws, responseChainMsg())
      break
    case MessageType.RESPONSE_BLOCKCHAIN:
      handleBlockchainResponse(message)
      break
    }
  })
}
