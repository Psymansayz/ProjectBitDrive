const MessageType = require('../data/MessageType')
const blockchain = require('../data/blockchain')

module.exports = () =>({
  'type': MessageType.RESPONSE_BLOCKCHAIN, 'data': JSON.stringify(blockchain)
})
