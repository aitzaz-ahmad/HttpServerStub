//HelloWorld Node.js HTTP Server

const http = require('http')
const https = require('https')
const fStream = require('fs')
const LISTENING_PORT_HTTP  = 3000
const LISTENING_PORT_HTTPS = 8000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.WriteHead(200);
  response.end('Hello Node.js Server!')
}

const http_server = http.createServer(requestHandler)

http_server.listen(LISTENING_PORT_HTTP, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${LISTENING_PORT_HTTP}`)
})