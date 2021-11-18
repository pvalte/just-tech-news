const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

//collecting the packaged group of API endpoints and prefixing them with the path /api
router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

//if we make a request to any endpoint that doesn't exist, we'll receive a 404 error 
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;