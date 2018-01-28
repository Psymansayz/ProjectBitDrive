const getGenesisBlock = require('../Block/getGenesisBlock')
const isValidNewBlock = require('../Block/isValidNewBlock')

module.exports = (blockchainToValidate) => {
  if (JSON.stringify(blockchainToValidate[0]) !== JSON.stringify(getGenesisBlock())) {
    return false
  }
  const tempBlocks = [blockchainToValidate[0]]
  for (let i = 1; i < blockchainToValidate.length; i++) {
    if (isValidNewBlock(blockchainToValidate[i], tempBlocks[i - 1])) {
      tempBlocks.push(blockchainToValidate[i])
    } else {
      return false
    }
  }
  return true
}
