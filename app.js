const express = require('express');

const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const errorsController = require('./controllers/errors');

const path = require('path');
const localDir = require('./util/path.js');

const app = express();
app.set('view engine', 'pug');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(localDir, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use(errorsController.NotFoundException);

app.listen(3000);