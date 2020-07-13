const buildBaseItem = (rawItem) => ({
    id: rawItem.id,
    title: rawItem.title,
    price: {
        currency: rawItem.currency_id,
        amount: Math.floor(rawItem.price),
        decimals: rawItem.price % 1,
    },
    picture: rawItem.thumbnail,
    condition: rawItem.condition,
    free_shipping: rawItem.shipping.free_shipping,
})
module.exports = buildBaseItem