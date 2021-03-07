const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyBJyg2JvNfwUe7FR9ZrVQCCmhQEnpzt170",
    authDomain: "golden-7b638.firebaseapp.com",
    projectId: "golden-7b638",
    storageBucket: "golden-7b638.appspot.com",
    messagingSenderId: "738520258548",
    appId: "1:738520258548:web:6685a0996da9f6509e4ba1"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase