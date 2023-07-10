const ProductController = require("../../controllers/products.controller");

module.exports = (app) =>{
   app.get("/api/products", ProductController.readAll);
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products/:id", ProductController.findOneSingleProduct);
    //  app.put("/api/shows/:id", ProductController.update);
    //  app.delete("/api/shows/:id", ProductController.delete);


}