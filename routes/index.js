const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
//const authRoutes = require("./auth/auth.routes");

// APP.post route TESTING
router.post('/testing', function(req, res){
   console.log('USER COMMENT: ' ,req.body);
   res.send("IM WORKING!");
});
// API Routes
router.use("/api", apiRoutes);




// Authorization Routes
//router.use("/auth", authRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;