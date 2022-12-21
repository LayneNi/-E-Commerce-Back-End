const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [
        {model:Product}
      ]
    });
    res.json(tagData)
    } catch (error) {
        console.log(error)
      }
      console.log("Getting all tags")
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id,{
      include: [
        {model:Product}
      ]
    });
    res.json(tagData)
    } catch (error) {
        console.log(error)
      }
      console.log("Getting all tags")
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    
    console.log(req.body)
    const newTag = await Tag.create(req.body)
    res.json(newTag)
  } catch (error) {
    console.log(error)

  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
  console.log(req.body)
  const updatedTag = await Tag.update(req.body,{
    where: {
      id: req.params.id,
    },
  })
  res.json(updatedTag)
} catch (error) {
  console.log(error)

}
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const deletedTag = await Tag.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(deletedTag);
  console.log("Deleting by Id")
});


module.exports = router;
