const express = require('express')
const app = express();
const route = require('./route/index')

route(app)

app.get('/', (req, res) => {
  res.send('<img with="100%" height="100%" src="https://lc-hfjzvymi.cn-n1.lcfile.com/91616c92da2bf270aca4.JPG" />')
})

app.listen(4000, () => {
  console.log('express server listening on port 4000')
})
