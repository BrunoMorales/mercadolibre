const express = require('express');
const fetch = require('node-fetch')
const path = require('path');
const resultAPI = require('./getResultFromServer')
const app = express();
const { API } = require('./constants')

// CORS
app.use((req, res, next) => {
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

app.get('/api/items', resultAPI.getResultsFromServer)



app.listen(process.env.PORT || 4002);


