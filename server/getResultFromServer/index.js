
const fetch = require('node-fetch')
const constants = require('../constants')
const { API, author } = constants
const { getCategoryWithMostResults } = require('../getCategoryBreadcrumb');

const getResultsFromServer = (req, res) => {
    const { q } = req.query;
    fetch(`${API}/sites/MLA/search?q=${q}`)
        .then(res => res.json())
        .then(data => {
            const results = buildResultsPayload(data)
            res.send(results);
        })
}

const buildResultsPayload = (data) => ({
    author,
    //TODO change to categories
    category_id: getCategoryWithMostResults(data.available_filters),
    items: data.results.map((result) => ({
        id: result.id,
        title: result.title,
        price: {
            //TODO check decimals and currency
            currency: 'ARS',
            amount: result.price,
            decimals: result.price % 1,
        },
        picture: result.thumbnail,
        condition: result.condition,
        free_shipping: result.shipping.free_shipping
    }))
});

module.exports = { getResultsFromServer }
