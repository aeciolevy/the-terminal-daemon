const routes = require('@paciolan/express-easy-routes')
const config = require('config')
const express = require('express')
const app = express()

const host = config.get('server.host')
const port = config.get('server.port')

const main = async () => {
  await routes({ app, path: __dirname + '/middlewares/**/*.middleware.js' })
  await routes({ app, path: __dirname + '/controllers/**/*.controller.js' })

  app.listen(port, host, () => {
    console.log(`Listening on http://${host}:${port}`)
  })
}

main().catch(err => {
  console.error(err)
  return Promise.reject(err)
})
