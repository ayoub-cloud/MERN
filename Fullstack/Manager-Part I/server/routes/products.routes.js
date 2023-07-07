const ProductController = require("../controllers/products.controller");

module.exports = (app) =>{
    app.get("/api/products", ProductController.readAll);
    app.post("/api/products", ProductController.createProduct);
    // app.get("/api/shows/:id", ShowController.findOne);
    // app.put("/api/shows/:id", ShowController.update);
    // app.delete("/api/shows/:id", ShowController.delete);


}