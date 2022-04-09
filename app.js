const express = require ('express')
const app = express()

const PORT = process.env.PORT || 3000
let todaysQuote = ""
// Middleware for json
app.use(express.json())

//serve frontend 
app.use(express.static('public'))


// Fetch the data
const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });

const generateQuote = async() => {
    try {
        const response = await client.fetchRandom();
        todaysQuote = response.data.result
      } catch (e) {
        return console.log(e);
      }
}

generateQuote()
app.get('/quote', (req, res)=>{
    console.log('we here to get some')
        res.send(todaysQuote)
        generateQuote()
    })


// run the server
app.listen(PORT, ()=>{
    console.log('App is running on PORT ', PORT)
})


/*
------------ GARBAGE -------------------------------
-------------------------------------- a normal get method
app.get('/', (req, res)=>{
const w = 'this is a w my nigga'
    console.log(w)
    res.send(w)
})
*/