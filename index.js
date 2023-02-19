const express= require('express')
const app = express()
const path = require('path')

app.use(express.static('./public'))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname , 'youtube.html'))
})
app.listen(443, ()=>{
    console.log('server is listening port 443');
})