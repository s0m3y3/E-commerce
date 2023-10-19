const router = require('express').Router();
const { Tag, Product } = require('../../models');
// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags & include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product}]
    });
    res.status(200).json(tagData);
  } 
  catch (err) {res.status(500).json(err);}
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id` & include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    });
    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }
    res.status(200).json(tagData);
  } 
  catch (err) {res.status(500).json(err);}
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    // const { Tag } = req.body;
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } 
  catch (err) {res.status(500).json(err);}
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // const { tag_name } = req.body;
    const tag = await Tag.update(req.body, {
     where:{id:req.params.id}
    });
    if (!tag) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }
  } 
  catch (err) {res.status(500).json(err);}
});

router.delete('/:id', async (req, res) => {
  try {
    const data = await Tag.destroy({ where: { id: req.params.id } });
    res.json(`${req.method} request was received to delete a tag`);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
