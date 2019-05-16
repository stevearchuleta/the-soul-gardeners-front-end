const router = require ("express").Router();
const passport = require ("./passport");

router
  .route('/local')
    .post(
      // middleware function called when the post request happens
      (req, res, next) => {
        // first get the passport local auth function
        const authFnc = passport.authenticate(
          'local', (err, user, info) => {
            // what we do after passort is done authenticating
            if(err) {
              // oops auth didn't pass
            } else if (user && user !== null) {
              // auth passed and a new user was found

              // create a token
              // place token into header
              // redirect back to the react applet  
              //res.redirect(`http://localhost:3000/?postLogin&newUser=${newUser}&userid=${userDetails.user_id`);
            } else {
              // authentication failed
            }
          }
        );
        // call the function with the req, res, and next
        authFnc.authFnc(req, res, next);
      }
    );

