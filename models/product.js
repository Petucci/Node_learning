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
    constructor(
            title,
            imageUrl,
            description,
            price
            ) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
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