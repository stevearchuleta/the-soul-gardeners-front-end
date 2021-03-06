const router = require ("express").Router();
const passport = require ("./passport");

router
  .route('/local')
    .post(
      // middleware function called when the post request happens
      (req, res, next) => {
        console.log('auth-routes: local started');
        // first get the passport local auth function
        const authFnc = passport.authenticate(
          'local', (err, user, info) => {
            // what we do after passort is done authenticating
            console.log('passport.authenticate(...) local: ', 
              {err, user, info});
            if(err) {
              console.log('passport.authenticate(...) local: error path');
              // oops auth didn't pass
            } else if (user && user !== null) {
              console.log('passport.authenticate(...) local: success path',   
                user);
              // auth passed and a new user was found

              // create a token

              // place token into header

              // redirect back to the react applet  
              
              //res.redirect(`http://localhost:3000/?postLogin&newUser=${newUser}&userid=${userDetails.user_id`);
            } else {
              console.log('passport.authenticate(...) local: null user path',   {user});
              // authentication failed
            }
          }
        );
        // call the function with the req, res, and next
        authFnc.authFnc(req, res, next);
      }
    );

module.exports = router;