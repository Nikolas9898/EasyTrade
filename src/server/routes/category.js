const router = require("express").Router();
let Category = require("../models/category/category.model");

router.route("/").get((req, res) => {
    Category.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
    const title = req.body.title;
    const parent_id = req.body.parent_id
    const subcategory = req.body.subcategory
    const newCategory = new Category({ title,subcategory,parent_id });

    Category.findById(parent_id)
        .then(category => {
            category.subcategory=('dfsdf')
            category.date = Date.parse(req.body.date);

            category.save()
                .then((category) => res.json(category))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
    // newCategory
    //     .save()
    //     .then(() => res.json(newCategory))
    //     .catch(err => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
    Category.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/delete/:id').delete((req, res) => {
    Category.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/edit/:id').put((req, res) => {
    Category.findById(req.params.id)
        .then(category => {
            category.title = req.body.title;
            category.subcategory = req.body.subcategory;
            category.date = Date.parse(req.body.date);

            category.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;
