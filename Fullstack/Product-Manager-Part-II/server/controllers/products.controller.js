// the controller does CRUD 
// import the model here

const Product = require("../models/products.model")


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

//READ ONE
module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.json({ Product: oneSingleProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

 //UPDATE 
// module.exports.update = (req, res) =>{
//     Hero.findOneAndUpdate({_id: req.params.id}, req.body,
//     {new: true, runValidators: true})
//     .then((updatedHero)=>{
//         res.json({Hero: updatedHero})
//     })
//     .catch((err) => {
//         res.json({ message: 'Something went wrong', error: err })
//     });
// }

 //DELETE
// module.exports.deleteAnExistingHero = (req, res) => {
//     Hero.deleteOne({ _id: req.params.id })
//         .then(result => {
//             res.json({ result: result })
//         })
//         .catch((err) => {
//             res.json({ message: 'Something went wrong', error: err })
//         });}