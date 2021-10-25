const Product = require('../models/product');
const ProductAction = require('../models/product-action');
const Actions = require('../util/actions');


exports.getShopPage = (req, res, next) => {
    Product.getAll(products => {
        res.render('shop/product-list', {
            products: products.map(product => ({
                details: product,
                actions: [Actions.addToCart(product), Actions.getProductDetails(product)]
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

exports.getOrdersPage = (req, res, next) => {
    res.render('shop/orders', {
        siteDetails: {
            path: '/orders',
            title: 'Orders'
        }
    });
};