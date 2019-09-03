const router = require("express").Router();

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.send('main home page');
});
router.get('/about', function(req, res) {
  res.send('About');
});

const usersRoutes = require("./users")
router.use("/users",usersRoutes)

module.exports = router;
