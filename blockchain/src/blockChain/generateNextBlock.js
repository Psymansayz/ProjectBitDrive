const getLatestBlock = require('./getLatestBlock')
const calculateHash = require('../Block/calculateHash')
const Block = require('../Block')

module.exports = (blockData) => {
  const previousBlock = getLatestBlock()
  const nextIndex = previousBlock.index + 1
  const nextTimestamp = new Date().getTime() / 1000
  const nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockData)
  return new Block(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash)
}
