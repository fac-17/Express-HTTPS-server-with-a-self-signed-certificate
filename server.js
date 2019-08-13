const https = require('https')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello HTTPS!')
})

https.createServer({}, app).listen(3000, () => {
  console.log('Listening...')
})