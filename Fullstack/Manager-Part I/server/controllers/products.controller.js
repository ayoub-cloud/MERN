
const Product = require('../models/products.model');
// this is another way to create ...

// module.exports.createProduct = async (req, res) => {
//   try {
//     const { title, price, description } = req.body;
//     const product = new Product({ title, price, description });
//     await product.save();
//     res.status(200).json(product);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// CREATE
module.exports.createProduct = (req, res) => {
  Product.create(req.body)
  .then((newlyCreatedProduct)=>{
      res.json({Product: newlyCreatedProduct})
  })
  .catch((err)=>{
      res.json({ message: "Something went wrong", error: err });
  });
};

// Read All
module.exports.readAll = (req, res) => {
  Product.find()
  .then((allProduct) =>{
      res.json(allProduct)
  })
  .catch((err) => {
      res.json({ message: 'Something went wrong', error: err })
  })


}
