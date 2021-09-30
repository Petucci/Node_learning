const express = require('express');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const errorRoutes = require('./routes/errors.js');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(errorRoutes);

app.listen(3000);