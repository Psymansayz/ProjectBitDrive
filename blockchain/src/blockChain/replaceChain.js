const isValidChain = require('./isValidChain')
let blockchain = require('../data/blockchain')
const broadcast = require('../P2PServer/broadcast')
const responseLatestMsg = require('../P2PServer/responseLatestMsg')

module.exports = (newBlocks) => {
  if (isValidChain(newBlocks) && newBlocks.length > blockchain.length) {
    console.log('Received blockchain is valid. Replacing current blockchain with received blockchain')
    blockchain = newBlocks
    broadcast(responseLatestMsg())
  } else {
    console.log('Received blockchain invalid')
  }
}
