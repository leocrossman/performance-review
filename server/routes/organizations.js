const express = require('express');

const organizationController = require('../controllers/organizationController');

const router = express.Router();

router.get('/', organizationController.getOrganizations, (req, res) => {
  console.log(res.locals.organizations);
  res.status(200).send({ express: res.locals.organizations });
});

router.post('/', (req, res) => {
  console.log(req.body);
  res.send(`I received your POST request. This is what you sent me: ${req.body}`);
});

router.get('/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

router.post('/world', organizationController.addOrganization, (req, res) => {
  res.send(res.locals.newOrganization);
});

module.exports = router;
