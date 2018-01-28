const httpServer = require('./src/httpServer')
const P2PServer = require('./src/P2PServer')
const connectToPeers = require('./src/P2PServer/connectToPeers')

const initialPeers = process.env.PEERS ? process.env.PEERS.split(',') : []

connectToPeers(initialPeers)
httpServer()
P2PServer()
