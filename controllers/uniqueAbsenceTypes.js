const fs = require("fs");
const path = require("path");
const paginate = require("../utils/pagination");

// Load JSON data
const absences = JSON.parse(fs.readFileSync("./mock-data/absence.json", "utf8")).payload;

const getUniqueAbsenceTypes = (req, res) => {
    const uniqueTypes = [...new Set(absences.map(absence => absence.type))];
    res.json({
        message: "Unique absence types fetched successfully",
        status: res.statusCode,
        data: uniqueTypes
    });
};


module.exports = { getUniqueAbsenceTypes };