const constants = require('./constants');
const { API, author } = constants
const buildBaseItem = require('./buildBaseItem')
const fetch = require('node-fetch')

const getProductById = (req, res) => {
    const { productId } = req.params
    fetch(`${API}/items/${productId}`)
        .then(res => res.json())
        .then(data => {
            buildProductPayload(data).then(
                product => res.send(product)
            )
        })
}

const buildProductPayload = async (rawProduct) => (
    fetch(`${API}/items/${rawProduct.id}/description`)
        .then(res => res.json())
        .then(res => ({
            author,
            item: {
                ...buildBaseItem(rawProduct),
                sold_quantity: rawProduct.sold_quantity,
                category: rawProduct.category_id,
                description: res.plain_text
            }
        })
        )
)



module.exports = getProductById
