const fs = require("fs");
const paginate = require("../utils/pagination");

// Load JSON data
const members = JSON.parse(fs.readFileSync("./mock-data/members.json", "utf8")).payload;
const absences = JSON.parse(fs.readFileSync("./mock-data/absence.json", "utf8")).payload;

// Controller to get absences with attached member data
const getAbsences = (req, res) => {
    const { page, limit, type, date } = req.query;

    let filteredAbsences = absences.map((absence) => {
        const member = members.find((m) => m.userId === absence.userId);
        return {
            ...absence,
            member: member || null,
        };
    });

    if (type) {
        filteredAbsences = filteredAbsences.filter(absence => absence.type === type);
    }

    if (date) {
        const targetDate = new Date(date);
        filteredAbsences = filteredAbsences.filter(absence => {
            const absenceStart = new Date(absence.startDate);
            const absenceEnd = new Date(absence.endDate);
            return targetDate >= absenceStart && targetDate <= absenceEnd;
        });
    }

    if (type && filteredAbsences.length === 0) {
        return res.json({
            message: "Absent members fetched successfully",
            status: res.statusCode,
            data: [],
            pagination: {
                total: 0,
                page: Number(page) || 1,
                limit: Number(limit) || 10,
            }
        });
    }

    const paginatedResult = paginate(filteredAbsences, page, limit);

    res.json({
        message: "Absent members fetched successfully",
        status: res.statusCode,
        data: paginatedResult.data,
        pagination: paginatedResult.pagination
    });
};

module.exports = { getAbsences };