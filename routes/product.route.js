const ProductController=require('../controllers/product.controller');
const Verifytoken=require('../middaleware/user.middaleware');

module.exports=function(app){
    app.post('/api/product', Verifytoken.verifyToken,ProductController.createProduct);
    app.put('/api/product/:id', Verifytoken.verifyToken,ProductController.updateProduct);
    app.get('/api/product', Verifytoken.verifyToken,ProductController.getAllProducts);
    app.delete('/api/product/:id', Verifytoken.verifyToken,ProductController.deleteProduct);
}