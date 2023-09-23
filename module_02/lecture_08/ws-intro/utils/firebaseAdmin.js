const firebaseAdmin = require("firebase-admin");
const serviceAccount = require("../services.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
});

module.exports = firebaseAdmin;


