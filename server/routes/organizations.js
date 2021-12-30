const express = require('express');

const organizationController = require('../controllers/organizationController');

const router = express.Router();

router.get('/', organizationController.getOrganizations, (req, res) => {
  return res.status(200).json(res.locals.organizations);
});

router.post('/new', organizationController.isOrganizationUnique, organizationController.addOrganization, (req, res) => {
  return res.status(200).json(res.locals.organization);
});

module.exports = router;
