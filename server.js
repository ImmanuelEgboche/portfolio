if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}


const express = require("express");
const app = express()
const expressLayouts = require("express-ejs-layouts")
const indexjs = require("./routes/index")
const goose = require('mongoose');
const { parse } = require('dotenv');


goose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const db = goose.connection;
db.on("error", error => console.error(error))
db.once('open', () => console.log('Connected to the goose'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/',indexjs)

app.listen(process.env.PORT || 3000, (err) => {
    if (err){
        console.error(err)
    }
    console.log(`Listening on 3000`)
})


