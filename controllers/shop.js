const Product = require('../models/product');
const ProductAction = require('../models/product-action');

const supportedActions = [
    new ProductAction('Add to cart')
];

exports.getShopPage = (req, res, next) => {
    Product.getAll(products => {
        res.render('shop/product-list', {
            products: products.map(product => ({
                details: product,
                actions: supportedActions
            })),
            siteDetails: {
                path: '/',
                title: 'Shop'
            }
        })
    });
};

exports.getCartPage = (req, res, next) => {
    res.render('shop/cart', {
        siteDetails: {
            path: '/cart',
            title: 'Cart'
        }
    });
};

exports.getProductsPage = (req, res, next) => {
    res.render('shop/index', {
        siteDetails: {
            path: '/products',
            title: 'Index of products'
        }
    });
}