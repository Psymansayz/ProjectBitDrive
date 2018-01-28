const express = require('express')
const bodyParser = require('body-parser')

const httpPort = process.env.HTTP_PORT || 3001
const sockets = require('../data/sockets')
const blockchain = require('../data/blockchain')

const broadcast = require('../P2PServer/broadcast')

const addBlock = require('../blockChain/addBlock')
const connectToPeers = require('../P2PServer/connectToPeers')
const generateNextBlock = require('../blockChain/generateNextBlock')

const responseLatestMsg = require('../P2PServer/responseLatestMsg')

module.exports = () => {
  const app = express()
  app.use(bodyParser.json())
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })

  app.get('/blocks', (req, res) => res.send(JSON.stringify(blockchain)))
  app.post('/mineBlock', (req, res) => {
    const newBlock = generateNextBlock(req.body.data)
    addBlock(newBlock)
    broadcast(responseLatestMsg())
    console.log(`block added: ${JSON.stringify(newBlock)}`)
    res.send()
  })
  app.get('/peers', (req, res) => {
    res.send(sockets.map(s => `${s._socket.remoteAddress}:${s._socket.remotePort}`))
  })
  app.post('/addPeer', (req, res) => {
    connectToPeers([req.body.peer])
    res.send()
  })
  app.listen(httpPort, () => console.log(`Listening http on port: ${httpPort}`))
}
