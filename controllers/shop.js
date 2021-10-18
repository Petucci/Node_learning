const Product = require('../models/product');

exports.getShopPage = (req, res, next) => {
    Product.getAll(products => {
        res.render('shop/product-list', 
        {
            products: products,
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