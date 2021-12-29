const db = require('../models/db');
const getDateInSQLFormat = require('../../util/getDateInFormat');

const organizationController = {};

organizationController.getOrganizations = async (req, res, next) => {
  try {
    const queryString = 'SELECT * FROM organizations;';
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
		VALUES('${name}', '${getDateInSQLFormat()}');
		`;

    const result = await db.query(queryString);
    const newOrganization = result.rows[0];
    res.locals.organization = newOrganization;
    return next();
  } catch (error) {
    return next({
      log: `organizationController.addOrganization: ${error}`,
      message: {
        err: 'Error occurred in organizationController.addOrganization. Error adding organization to db. Check the server logs.',
      },
    });
  }
};

module.exports = organizationController;
