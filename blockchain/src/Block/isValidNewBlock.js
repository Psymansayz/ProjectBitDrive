const calculateHashForBlock = require('./calculateHashForBlock')

module.exports = (newBlock, previousBlock) => {
  if (previousBlock.index + 1 !== newBlock.index) {
    console.log('invalid index')
    return false
  } else if (previousBlock.hash !== newBlock.previousHash) {
    console.log('invalid previoushash')
    return false
  } else if (calculateHashForBlock(newBlock) !== newBlock.hash) {
    console.log(`${typeof newBlock.hash  } ${  typeof calculateHashForBlock(newBlock)}`)
    console.log(`invalid hash: ${  calculateHashForBlock(newBlock)  } ${  newBlock.hash}`)
    return false
  }
  return true
}
