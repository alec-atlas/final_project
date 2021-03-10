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
  
  
    // let apiKey = '3c3ce4bbc9f88f6e53ab74009b5fafa4'
    // let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US`)
    // let json = await response.json()
    // let movies = json.results
    // console.log(movies)
    
    // for (let i=0; i<movies.length; i++) {
    //   let movie = movies[i]
    //   let docRef = await db.collection('watched').doc(`${movie.id}-${user.uid}`).get()
    //   let watchedMovie = docRef.data()
    //   let opacityClass = ''
    //   if (watchedMovie) {
    //     opacityClass = 'opacity-20'
    //   }
  
    //   document.querySelector('.movies').insertAdjacentHTML('beforeend', `
    //     <div class="w-1/5 p-4 movie-${movie.id}-${user.uid} ${opacityClass}">
    //       <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="w-full">
    //       <a href="#" class="watched-button block text-center text-white bg-green-500 mt-4 px-4 py-2 rounded">I've watched this!</a>
    //     </div>
    //   `)
  
    //   document.querySelector(`.movie-${movie.id}-${user.uid}`).addEventListener('click', async function(event) {
    //     event.preventDefault()
    //     let movieElement = document.querySelector(`.movie-${movie.id}-${user.uid}`)
    //     movieElement.classList.add('opacity-20')
    //     await db.collection('watched').doc(`${movie.id}-${user.uid}`).set({})
    //   }) 
    // } 
    } 
    // else {
    //   console.log('no user')
    //     // Initializes FirebaseUI Auth
    //     let ui = new firebaseui.auth.AuthUI(firebase.auth())
  
    //     // FirebaseUI configuration
    //     let authUIConfig = {
    //       signInOptions: [
    //         firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //       ],
    //       signInSuccessUrl: 'index.html'
    //     }
    
    //     // Starts FirebaseUI Auth
    //     ui.start('.sign-in-or-sign-out', authUIConfig)
    // }
  
  })