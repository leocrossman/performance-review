const db = require('../models/db');
const getDateInSQLFormat = require('../../util/getDateInFormat');

const organizationController = {};

organizationController.getOrganizations = async (req, res, next) => {
  try {
    const queryString = 'SELECT * FROM organizations;';
    const queryResult = await db.query(queryString);
    const organizations = queryResult.rows;
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

organizationController.isOrganizationUnique = async (req, res, next) => {
  try {
    const { name } = req.body;
    const queryString = `
		SELECT name FROM organizations
		WHERE name = 	CAST('${name.toLowerCase()}' AS TEXT)
		;`;
    const queryResult = await db.query(queryString);
    return queryResult.rows.length ? res.status(200).send(`The organization with the name "${name}" is already taken.`) : next();
  } catch (error) {
    return next({
      log: `organizationController.isOrganizationUnique: ${error}`,
      message: {
        err: 'Error occurred in organizationController.isOrganizationUnique. Error checking if the user is unique. Check the server logs.',
      },
    });
  }
};

organizationController.addOrganization = async (req, res, next) => {
  try {
    const { name } = req.body;
    const queryString = `
		INSERT INTO organizations(name, date_created)
		VALUES('${name.toLowerCase()}', '${getDateInSQLFormat()}')
		RETURNING *
		;`;
    const queryResult = await db.query(queryString);
    res.locals.organization = queryResult.rows[0];
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
