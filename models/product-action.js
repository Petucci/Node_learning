module.exports = class ProductAction {
    constructor(name, link, method) {
        this.name = name
        this.link = link ? link : '';
        this.method = method ? method : 'GET';
    }
}