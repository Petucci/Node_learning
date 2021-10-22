const Product = require('../models/product')
const ProductAction = require('../models/product-action')

const supportedActions = [
    new ProductAction('Update'),
    new ProductAction('Delete')
]

exports.getProductsPage = (req, res, next) => {
    Product.getAll((products) => {
        res.render(
            'admin/product-list', {
                products: products.map(product => ({
                    details: product,
                    actions: supportedActions
                })),
                siteDetails: {
                    path: '/admin/product-list',
                    title: '[Admin] Products'
                }
            });
    })
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