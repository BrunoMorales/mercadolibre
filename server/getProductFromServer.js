const constants = require('./constants');
const { API, author } = constants
const buildBaseItem = require('./buildBaseItem')
const fetch = require('node-fetch')

const getProductById = (req, res) => {
    const { productId } = req.params
    fetch(`${API}/items/${productId}`)
        .then(res => res.json())
        .then(data => {
            const product = buildProductPayload(data)
            res.send(product)
        })
}

const buildProductPayload = (rawProduct) => ({
    author,
    item: {
        ...buildBaseItem(rawProduct),
        sold_quantity: rawProduct.sold_quantity,
        description: 'text',
    }
})

module.exports = getProductById
