var express=require('express')
const app=express()

app.listen(4500,()=>{
    console.log("server started")
})

 app.use(express.static(__dirname +'/public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})