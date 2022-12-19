const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  // find all categories
  try {
const categoriesData = await Category.findAll({
  include: [
    {model:Product}
  ]
});
res.json(categoriesData)
} catch (error) {
    console.log(error)
  }
  // be sure to include its associated Products
});

router.get('/:id', async(req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id,{
      include: [
        {model:Product}
      ]
    });
    res.json(categoryData)
    } catch (error) {
        console.log(error)
      }
  console.log("Getting by Id")
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    
    console.log(req.body)
    const newCategory = await Category.create(req.body)
    res.json(newCategory)
  } catch (error) {
    console.log(error)

  }
  //category_name: "String"
  

});

router.put('/:id',async (req, res) => {
  try {
    
    console.log(req.body)
    const updatedCategory = await Category.update(req.body,{
      where: {
        id: req.params.id,
      },
    })
    res.json(updatedCategory)
  } catch (error) {
    console.log(error)

  }
  // update a category by its `id` value
  console.log("Updating by Id")
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deletedCategory = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json(deletedCategory);
  console.log("Deleting by Id")
});

module.exports = router;
