const express = require('express');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1> 404 :( </h1>');
})

app.listen(3000);