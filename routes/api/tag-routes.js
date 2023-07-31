const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [
      {
        model: Product,
        // through: ProductTag
      }
    ]
  })
  .then(ProductTagData => res.json(ProductTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
  
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Product,
        // through: ProductTag
      }
    ]
  })
  .then(ProductTagData => {
    if(!ProductTagData){
      res.status(404).json({message: 'Invalid id! No Tag associated with this id'});
      return;
    }
    res.json(ProductTagData)
  })
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  })
  .then(ProductTagData => res.json(ProductTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(ProductTagData => {
    if(!ProductTagData){
      res.status(404).json({message: 'Invalid input. No Tag with said id.'});
      return;
    }
    res.json(ProductTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(ProductTagData => {
    if(!ProductTagData){
      res.status(404).json({message:'Invalid input. No Tag with said id.'});
      return;
    }
    res.json(ProductTagData)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
