const express = require('express')
const app = express()
const portaoDoInferno = 300

app.get('/about-us', (req, res) => {
    res.render('About')
})


app.listen(portaoDoInferno, () => {
    console.log(`Servidor rodando na porta ${portaoDoInferno}`)
})