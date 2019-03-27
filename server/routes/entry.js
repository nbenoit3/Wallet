var express = require('express');
var router = express.Router();
let db = require("../db");

/* POST new entry */
router.post('/new', async function(req, res, next) {
  let userID = req.body.loggedInUser;
  let website = req.body.website;
  let username = req.body.username;
  let password = req.body.password;
  let cardNumber = req.body.cardNumber;
  let expirationDate = req.body.expirationDate;
  let securityCode = req.body.securityCode;

  const newEntry = await db.one('INSERT INTO entries(user_id, website, username, password, card_number, expiration_date, security_code) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id, website', [userID, website, username, password, cardNumber, expirationDate, securityCode])
  res.json(newEntry);
});

module.exports = router;
