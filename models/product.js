const fileSystem = require('fs');
const localPath = require('../util/path');
const path = require('path');

const productsFilePath = path.join(
    localPath,
    'data',
    'products.json'
);

const getProductsFromFile = (callback) => {
    fileSystem.readFile(productsFilePath, (error, content) => {
        if (error) {
            callback([])
        }
        else {
            callback(JSON.parse(content));
        }
    });
}

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fileSystem.writeFile(productsFilePath, JSON.stringify(products), (error) => {
                console.log(error);
            });
        });
    }

    static getAll(callback)
    {
        getProductsFromFile(callback)
    };
}