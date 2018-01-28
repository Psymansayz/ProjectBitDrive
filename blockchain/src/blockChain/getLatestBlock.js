const blockchain = require('../data/blockchain')

module.exports = () => blockchain[blockchain.length - 1]
