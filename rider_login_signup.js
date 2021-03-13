firebase.auth().onAuthStateChanged(async function(user)  {

    let db = firebase.firestore()
  
    if (user) {
    
  
      db.collection('riders').doc(user.uid).set({
        name: user.displayName,
        email: user.email
      })
      console.log(`${user.displayName} logged in`)
  
      document.querySelector('.sign-in-or-sign-out').innerHTML = `
      <a href="#" class = "sign-out text-blue-500 underline">Sign Out ${user.displayName}</a>
      `
      document.querySelector('.sign-out').addEventListener('click', function(event) {
        event.preventDefault()
        firebase.auth().signOut()
        document.location.href = 'index.html'
      })

      window.location.href = 'dashboard.html'

    } else {
      console.log('no user')
      
        // Initializes FirebaseUI Auth
        let ui = new firebaseui.auth.AuthUI(firebase.auth())
  
        // FirebaseUI configuration
        let authUIConfig = {
          signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
          ],
          signInSuccessUrl: 'dashboard.html'
        }
    
    //     // Starts FirebaseUI Auth
        ui.start('.sign-in-or-sign-out', authUIConfig)
    }
  
  })
