const express = require('express');

const memberController = require('../controllers/memberController');

const router = express.Router();

router.get('/', memberController.getMembers, (req, res) => {
  return res.status(200).json(res.locals.members);
});

router.post('/new', memberController.checkForUniqueEmail, memberController.addMember, (req, res) => {
  return res.status(200).json(res.locals.member);
});

module.exports = router;
