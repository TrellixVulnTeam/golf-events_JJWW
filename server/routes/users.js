var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  console.log(req.body, 'the body');
  res.json({ users: mockUsers });
});

//to add users
router.post("/", function(req, res, next) {
  mockUsers.push(req.body);
  const user = {
    name: req.body.name,
    email: req.body.id,
  };
  console.log(user);
  res.send(req.body);
});

module.exports = router;

let mockUsers = [
  { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
  { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
  { id: 3, name: 'Dory', email: 'dory@gmail.com' }
];
