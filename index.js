const express= require('express')
const app= express()
const port = process.env.PORT || 3001
app.use(express.static(__dirname +"/public"))
//create instance of http server
const server= require('http').createServer(app)

app.get("/home", (req,res)=>{
   res.sendFile(__dirname + "/public/home.html")
   //res.send("hello") 
 })

 server.listen(port,()=>{
    console.log("server running ")
})