
const { admin, db } = require("../config/admin");

const config = require("../config/config");


const firebase = require("firebase");
firebase.initializeApp(config);

const {
  validateSignupData,
  validateLoginData,
  reduceUserDetails,
} = require('../config/validators');






// Sign users up

exports.register = (req,res) => {
  console.log(req.body.user.email);
  const newUser = {
    email: req.body.user.email,
    password: req.body.user.password,
    confirmPassword: req.body.user.confirmPassword,
    handle: req.body.user.handle,
  };

  const { valid, errors } = validateSignupData(newUser);

  if (!valid) return res.status(200).json(errors);

  const noImg = "no-img.png";

  let token, userId;
  return db.doc(`/users/${newUser.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(200).json({ handle: "this handle is already taken" });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        //TODO Append token to imageUrl. Work around just add token from image in storage.
        imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
        userId,
      };
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(200).json({ email: "Email is already is use" });
      } else {
        return res
          .status(200)
          .json({ general: "Something went wrong, please try again" });
      }
    });
};


// signin user 
exports.signin = (req, res) => {
  const user = {
    email: req.body.user.email,
    password: req.body.user.password,
  };

  const { valid, errors } = validateLoginData(user);

  if (!valid) return res.status(400).json(errors);

  return firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((err) => {
      console.error(err);
      console.log('A@@@@@@@@@@@@@@@@@@@@');
      // auth/wrong-password
      // auth/user-not-user
      return res
        .status(200)
        .json({ general: "Wrong credentials, please try again" });
    });
};
 
exports.signout = (req, res) => {
  res.clearCookie("token");
  res.json({
    message: "User signout successfully"
  });
};