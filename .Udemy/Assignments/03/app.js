const express = require('express');
const path = require('./utils/path');

const userRoute = require('./routes/users');
const landingRoute = require('./routes/landing');
const errorsRoute = require('./routes/errors');

const app = express();

app.use(express.static(path.path.join(path.baseDirectory, 'public')));

app.use('/users', userRoute);
app.use(landingRoute);
app.use(errorsRoute);


app.listen(3000);