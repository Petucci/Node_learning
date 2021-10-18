exports.NotFoundException = (req, res, next) => {
    console.log(`404 not found --> ${req.originalUrl}`);
    res.status(404).render('404', {
        siteDetails: {
            path: '',
            title: '404 - not found'
        }
    })
};