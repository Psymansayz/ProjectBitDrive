/**
 * Block Class
 */
class Block {
  /**
   * constructor
   * @param {Number} index        [description]
   * @param {String} previousHash [description]
   * @param {Number} timestamp    [description]
   * @param {String} data         [description]
   * @param {String} hash         [description]
   */
  constructor(index, previousHash, timestamp, data, hash) {
    this.index = index
    this.previousHash = previousHash.toString()
    this.timestamp = timestamp
    this.data = data
    this.hash = hash.toString()
  }
}

module.exports = Block
