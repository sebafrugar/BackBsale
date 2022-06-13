const ProductsControllers = require("../controllers/products.controllers")


module.exports = function(app){

    app.get("/api/prueba", ProductsControllers.AllProducts);
    app.get("/api/search/:query", ProductsControllers.Search);
    app.get("/api/category/:id", ProductsControllers.Category);

}
