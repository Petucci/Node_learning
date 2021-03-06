const e = require('express');
const Product = require('../models/product')
const ProductAction = require('../models/product-action')

const supportedActions = [
    new ProductAction('Update', '/admin/edit-product', 'post'),
    new ProductAction('Delete', '/admin/delete-product', 'post')
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

exports.deleteProduct = (req, res, next) => {
    console.log("Product should get deleted here");
    res.redirect('/');
}

exports.updateProduct = (req, res, next) => {
    console.log("Product should get updated here");
    res.redirect('/');
}