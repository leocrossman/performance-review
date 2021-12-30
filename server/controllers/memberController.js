const db = require('../models/db');
const getDateInSQLFormat = require('../../util/getDateInFormat');

const memberController = {};

memberController.getMembers = async (req, res, next) => {
  try {
    const queryString = 'SELECT * FROM members;';
    const queryResult = await db.query(queryString);
    const members = queryResult.rows;
    res.locals.members = members;
    return next();
  } catch (error) {
    return next({
      log: `memberController.getMembers: ERROR: ${error}`,
      message: {
        err: 'Error occurred in memberController.getMembers. Error getting members data from db. Check the server logs.',
      },
    });
  }
};

memberController.checkForUniqueEmail = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email } = req.body;
    const queryString = `
		SELECT name FROM members
		WHERE email = CAST('${email.toLowerCase()}' AS TEXT)
		;`;
    const queryResult = await db.query(queryString);
    return queryResult.rows.length ? res.status(200).send(`Sorry, ${name}, an account with the email "${email}" is already taken.`) : next();
  } catch (error) {
    return next({
      log: `memberController.isOrganizationUnique: ${error}`,
      message: {
        err: 'Error occurred in memberController.checkForUniqueEmail. Error checking if the user is unique. Check the server logs.',
      },
    });
  }
};

memberController.addMember = async (req, res, next) => {
  try {
    const { email, name, organizationName, role, password } = req.body;
    const queryString = `
		INSERT INTO members(name, email, role, password, date_created, organization_id)
		VALUES('${name.toLowerCase()}', '${email.toLowerCase()}', '${role.toLowerCase()}', '${password}', '${getDateInSQLFormat()}', (SELECT id FROM organizations WHERE name = '${organizationName}') )
		RETURNING *
		;`;
    const queryResult = await db.query(queryString);
    res.locals.member = queryResult.rows[0];
    return next();
  } catch (error) {
    return next({
      log: `memberController.addMember: ${error}`,
      message: {
        err: 'Error occurred in memberController.addMember. Error adding organization to db. Check the server logs.',
      },
    });
  }
};

module.exports = memberController;
