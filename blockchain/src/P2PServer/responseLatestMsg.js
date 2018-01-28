const MessageType = require('../data/MessageType')
const getLatestBlock = require('../blockChain/getLatestBlock')

module.exports = () => ({
  'type': MessageType.RESPONSE_BLOCKCHAIN,
  'data': JSON.stringify([getLatestBlock()])
})
