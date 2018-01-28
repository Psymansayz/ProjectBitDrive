const blockchain = require('../data/blockchain')
const isValidNewBlock = require('../Block/isValidNewBlock')
const getLatestBlock = require('./getLatestBlock')

module.exports = (newBlock) => {
  if (isValidNewBlock(newBlock, getLatestBlock())) {
    blockchain.push(newBlock)
  }
}
