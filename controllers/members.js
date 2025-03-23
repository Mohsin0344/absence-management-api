const fs = require("fs");
const paginate = require("../utils/pagination");

// Load JSON data
const members = JSON.parse(fs.readFileSync("./mock-data/members.json", "utf8")).payload;

// Controller to get members
const getMembers = (req, res) => {
    const { page, limit } = req.query;

    const paginatedResult = paginate(members, page, limit);
    
    res.json({
        message: "Members fetched successfully",
        status: res.statusCode,
        data: paginatedResult.data,
        pagination: paginatedResult.pagination
    });
};

module.exports = { getMembers };
