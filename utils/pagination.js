const paginate = (data, page = 1, limit = 10) => {
    page = parseInt(page);
    limit = parseInt(limit);

    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.min(page, totalPages); 
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedData = data.slice(startIndex, endIndex);

    return {
        data: paginatedData,
        pagination: {
            totalItems,
            totalPages,
            currentPage,
            pageSize: limit,
            nextPage
        }
    };
};

module.exports = paginate;
