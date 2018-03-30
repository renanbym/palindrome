const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')

const isPalindrome = require('./palindrome');

const app = express()
const server = http.createServer(app)

app.set('view engine', 'ejs')
app.set('views', './web')

app.use('/node_modules', express.static('./node_modules'))
app.use('/web', express.static('./web'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/v1/palindrome', (req, res) => {
    let data = req.body;
    if( !data.txt ) res.status(406).json({"code":406,"status":"error","message": "Item nor found" })
    if( !isPalindrome(data.txt) ) res.status(400).json({"code":400,"status":"error","message": "Is not a palindrome" })
    res.status(200).json({"code":401,"status":"error","message": "Is a palindrome" })
})

app.get('/', (req, res) => res.render('index.ejs') )

server.listen( process.env.PORT || '3001' )
.on('listening', () => console.log('Run, forest run', process.env.NODE_ENV, '3001' ) )

module.exports = app