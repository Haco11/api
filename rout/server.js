const express = require('express')
const app = express()
const port = 3000

app.get('/Comments.js', (req, res) => res.send('Hello World!'))
//här skapar man servern med port 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
