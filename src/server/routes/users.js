const router = require("express").Router();
let User = require("../models/user/user.model");
const auth = require('../middlewares/authenticate')

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const password = req.body.password
  const newUser = new User({ username,password });

  newUser
    .save()
    .then(() => res.json(newUser))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
      .then(exercise => res.json(exercise))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
      .then(() => res.json('User deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edit/:id').put((req, res) => {
  User.findById(req.params.id)
      .then(user => {
        user.username = req.body.username;
        user.password = req.body.password;
        user.date = Date.parse(req.body.date);

        user.save()
            .then(() => res.json('Exercise updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
