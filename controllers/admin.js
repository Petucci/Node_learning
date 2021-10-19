const Product = require('../models/product') 

exports.getProductsPage = (req, res, next) => {
    res.render(
        'admin/product-list',
        {
            siteDetails: {
                path: '/admin/product-list',
                title: '[Admin] Products'
            }
        });
};

exports.createProduct = (req, res, next) => {
    let body = req.body;
    let product = new Product(
        body.title,
        body.imageUrl,
        body.description,
        body.price);
    product.save();
    res.redirect('/');
}