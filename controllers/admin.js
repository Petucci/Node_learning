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
    let product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}