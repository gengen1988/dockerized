const app = require('express')()
app.get('/', routeHelloWorld)
app.listen(3000, onListen)

function routeHelloWorld(req, res) {
  res.send('Hello World!')
}

function onListen() {
  console.log('server started on 3000')
}
