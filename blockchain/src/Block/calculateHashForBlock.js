const calculateHash = require('./calculateHash')

module.exports = (block) => {
  return calculateHash(block.index, block.previousHash, block.timestamp, block.data)
}
