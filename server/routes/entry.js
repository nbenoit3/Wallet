var express = require('express');
var router = express.Router();
let db = require("../db");

router.post('/entrylist', async function(req, res, next) {
  let userID = req.body.id;

  let entryList = await db.any('SELECT * FROM entries WHERE user_id = $1',[userID])
    res.json(entryList);
});

/* POST new entry */
router.post('/new', async function(req, res, next) {
  let userID = parseInt(req.body.currentUserID, 10);
  let website = req.body.website;
  let username = req.body.username;
  let password = req.body.password;
  let cardNumber = req.body.cardNumber;
  let expirationDate = req.body.expirationDate;
  let securityCode = parseInt(req.body.securityCode, 10);

  const newEntry = await db.one('INSERT INTO entries(user_id, website, username, password, card_number, expiration_date, security_code) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id, website', [userID, website, username, password, cardNumber, expirationDate, securityCode])
  res.json(newEntry);
});

router.post('/delete', async function(req, res, next) {
  let entryID = req.body.id;
  console.log(entryID);

  const deletedEntry = await db.one(`DELETE FROM entries WHERE id = $1 RETURNING *`, [entryID]);
  console.log(deletedEntry);
  res.json(deletedEntry);
})

module.exports = router;
