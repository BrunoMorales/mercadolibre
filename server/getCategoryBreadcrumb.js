const getCategoryWithMostResults = (available_filters) => {
    const categoryFilter = available_filters.find(
        (available_filter) => available_filter.id === 'category'
    )
    let finalCategory = { id: '', name: '', results: 0 };
    categoryFilter.values.map(
        (category) => {
            if (category.results > (finalCategory.results || 0)) finalCategory = category
        })
    return finalCategory.id
}

module.exports = { getCategoryWithMostResults }