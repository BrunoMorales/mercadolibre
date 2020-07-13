const express = require('express');
const fetch = require('node-fetch')
const path = require('path');
const app = express();

// CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    req.header('x_application_id');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST');
    next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const API = 'https://api.mercadolibre.com'

app.get('/')

app.get('/api/items/:productId', (req, res) => {
    const { productId } = req.params
    fetch(`${API}/items/${productId}`)
        .then(res => res.json())
        .then(data => {
            res.send(data)
        })

})

app.get('/api/descriptions/:productId', (req, res) => {
    const { productId } = req.params
    fetch(`${API}/items/${productId}/description`)
        .then(res => res.json())
        .then(data => {
            res.send(data)
        })
})

app.get('/api/category/:categoryId', (req, res) => {
    const { categoryId } = req.params
    fetch(`${API}/categories/${categoryId}`)
        .then(res => res.json())
        .then(data => {
            res.send(data)
        })

})

app.get('/api/items', (req, res) => {
    const { q } = req.query;
    fetch(`${API}/sites/MLA/search?q=${q}`)
        .then(res => res.json())
        .then(data => {
            res.send(data);
        })
})



app.listen(process.env.PORT || 4002);