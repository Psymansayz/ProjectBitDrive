const getLatestBlock = require('../blockChain/getLatestBlock')
const blockchain = require('../data/blockchain')
const broadcast = require('./broadcast')
const responseLatestMsg = require('./responseLatestMsg')
const replaceChain = require('../blockChain/replaceChain')
const queryAllMsg = require('./queryAllMsg')

module.exports = (message) => {
  const receivedBlocks = JSON.parse(message.data).sort((b1, b2) => b1.index - b2.index)
  const latestBlockReceived = receivedBlocks[receivedBlocks.length - 1]
  const latestBlockHeld = getLatestBlock()
  if (latestBlockReceived.index > latestBlockHeld.index) {
    console.log(`blockchain possibly behind. We got: ${  latestBlockHeld.index  } Peer got: ${  latestBlockReceived.index}`)
    if (latestBlockHeld.hash === latestBlockReceived.previousHash) {
      console.log('We can append the received block to our chain')
      blockchain.push(latestBlockReceived)
      broadcast(responseLatestMsg())
    } else if (receivedBlocks.length === 1) {
      console.log('We have to query the chain from our peer')
      broadcast(queryAllMsg())
    } else {
      console.log('Received blockchain is longer than current blockchain')
      replaceChain(receivedBlocks)
    }
  } else {
    console.log('received blockchain is not longer than current blockchain. Do nothing')
  }
}
