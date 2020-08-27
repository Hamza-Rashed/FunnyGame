const  
    express = require('express'),
    app = express(),
    port = 3000

app.use(express.static(__dirname + '/files'))

app.get('/' , (req , res)=>{
    res.sendFile(__dirname + '/files/index.html')
})



    app.listen(port)