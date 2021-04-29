require('source-map-support/register')
import Database from './database/Database';
import { RouterServer } from './RouterServer'

;(async () => {
  new RouterServer().start(9000)
  await new Database().connect();
})()
