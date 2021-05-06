import express from 'express'
import http from 'http'
import path from 'path'
const app = express()
const httpServer = http.Server(app);
const httpPort = 80;

app.use(express.static(path.join(__dirname, '../app/dist/pwa-app')))
app.get('/',function(req, res) {
res.sendFile(path.join(__dirname, '../app/dist/pwa-app/index.html'))
})
httpServer.listen(httpPort, function () {
  console.log(`Listening on port ${httpPort}!`)
})