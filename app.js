const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/", (req, res)=>{

    res.sendFile(__dirname + "/views/index.html")
})
app.get("/contact", (req, res)=>{

    res.sendFile(__dirname + "/views/contact.html")

})
app.get("/about", (req, res)=>{

    res.sendFile(__dirname + "/views/about.html")

})
app.get("/disclaimer", (req, res)=>{

    res.sendFile(__dirname + "/views/disclaime.html")

})





app.get("/how-to-make-pacoca", (req, res)=>{

        res.sendFile(__dirname + "/views/pages/paçoca.html")
})

app.listen(8080)


