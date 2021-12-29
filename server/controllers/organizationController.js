const db = require('../models/db');
const getDateInSQLFormat = require('../../util/getDateInFormat');

const organizationController = {};

organizationController.getOrganizations = async (req, res, next) => {
  try {
    const queryString = 'select * from organizations;';
    const result = await db.query(queryString);
    const organizations = result.rows;
    res.locals.organizations = organizations;
    return next();
  } catch (error) {
    return next({
      log: `organizationController.getOrganizations: ERROR: ${error}`,
      message: {
        err: 'Error occurred in organizationController.getOrganizations. Error getting characters data from db. Check the server logs.',
      },
    });
  }
};

organizationController.addOrganization = async (req, res, next) => {
  try {
    const { name } = req.body;
    const queryString = `
		INSERT INTO organizations(name, date_created)
		VALUES(${name}, ${getDateInSQLFormat()})
		`;

    const newOrganization = await db.query(queryString);

    res.locals.newOrganization = newOrganization;
    return next();
  } catch (error) {
    next({
      log: `organizationController.addOrganization: ERROR: ${error}`,
      message: {
        err: 'Error occurred in organizationController.addOrganization. Error getting characters data from db. Check the server logs.',
      },
    });
  }
  return next();
};

module.exports = organizationController;
