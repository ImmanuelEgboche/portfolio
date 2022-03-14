const express = require("express")
const router = express.Router()

router.get('/',(req,res) => {
    res.render('index')
})

router.get('/social', (req, res) => {
    res.render('social')
})

module.exports = router