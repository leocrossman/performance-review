const express = require('express');

const organizationController = require('../controllers/organizationController');

const router = express.Router();

router.get('/', organizationController.getOrganizations, (req, res) => {
  res.status(200).json(res.locals.organizations);
});

router.post('/new', organizationController.addOrganization, (req, res) => {
  return res.status(200).json(res.locals.organization);
});

// router.get('/hello', (req, res) => {
//   res.status(200).send({ express: 'Hello From Express' });
// });

// router.post('/world', organizationController.addOrganization, (req, res) => {
//   res.status(200).send(res.locals.newOrganization);
// });

module.exports = router;
