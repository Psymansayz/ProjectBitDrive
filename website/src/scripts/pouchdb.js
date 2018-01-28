import PouchDB from 'pouchdb-core'
import PouchdbFind from 'pouchdb-find'
import pouchdbAuthentication from 'pouchdb-authentication'
import pouchdbAdapterHttp from 'pouchdb-adapter-http'
import pouchdbMapreduce from 'pouchdb-mapreduce'

const config = require('mainConfig')
PouchDB.plugin(pouchdbAdapterHttp)
PouchDB.plugin(PouchdbFind)
PouchDB.plugin(pouchdbAuthentication)
PouchDB.plugin(pouchdbMapreduce)

module.exports = (db) => {
  return new PouchDB(config.domains.couchdb + db)
}
