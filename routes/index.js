const express = require('express');
const router = express.Router();
const { getMembers } = require("../controllers/members");
const { getAbsences } = require("../controllers/absence");
const { getUniqueAbsenceTypes } = require("../controllers/uniqueAbsenceTypes");

const ROUTES = {
    MEMBERS: '/members',
    ABSENCES: '/absences',
    ABSENCE_TYPES: '/absences/types'
};

router.get(ROUTES.MEMBERS, getMembers);

router.get(ROUTES.ABSENCES, getAbsences);

router.get(ROUTES.ABSENCE_TYPES, getUniqueAbsenceTypes);

module.exports = router;

