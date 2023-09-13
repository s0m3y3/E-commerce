const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }]
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No driver found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const { category } = req.body;
    const newCategory = await Category.create({ category });
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value

  try {
    const { category_name } = req.body;
    const category = await Category.findByPk(req.params.id);
    if (!category) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    category.category_name = category_name;
    await category.save();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }

});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
