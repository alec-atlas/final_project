firebase.auth().onAuthStateChanged(async function (user) {
  if (user) {
    // console.log('signed in')

    // fetch all driver data from the get_drivers endpoint and render driver profiles
    let response = await fetch('/.netlify/functions/get_drivers')
    let drivers = await response.json()
    for (let i = 0; i < drivers.length; i++) {
      let driver = drivers[i]
      renderDriver(driver)
    }

    // let db = firebase.firestore()

    // let querySnapshot = await db.collection('drivers').get()

    // let drivers = querySnapshot.docs

    // for (let i=0; i<drivers.length; i++) {
    //   let driverID = drivers[i].id
    //   let driverName = drivers[i].name
    //   let driverFee = drivers[i].fee
    //   let driverProfilePic = drivers[i].profilepic

    //   document.querySelector('.drivers').insertAdjacentHTML('beforeend', `
    //   <div class=".driver-${driverID} p-4 w-full md:w-1/2 lg:w-1/3">
    //     <div class="border h-full p-4 flex flex-col">
    //         <h2 class="text-lg font-bold mb-4">${driverName}</h2>
    //         <div class="mb-4"><img src="${driverProfilePic}">
    //       </div>
    //         <div class="mb-4 text-gray-900">
    //           I am the best driver in all of Chicago!
    //         </div>
    //       <div class="mt-auto text-yellow-500 text-2xl">$${driverFee}/hour</div>
    //     </div>
    //   </div>
    //   `)
    // }

    document.querySelector('.sign-in-or-sign-out').innerHTML = `
      <button class="text-pink-500 underline sign-out">Sign Out</button>
    `

    document.querySelector('.sign-out').addEventListener('click', function (event) {
      console.log('sign out clicked')
      firebase.auth().signOut()
      document.location.href = 'index.html'
    })



    // WHAT SIGNED OUT USERS SEE 
  } else {
    // Signed out
    console.log('signed out')

    // Initializes FirebaseUI Auth
    let ui = new firebaseui.auth.AuthUI(firebase.auth())

    // FirebaseUI configuration
    let authUIConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: 'index.html'
    }

    // Starts FirebaseUI Auth
    ui.start('.sign-in-or-sign-out', authUIConfig)
  }
})

async function renderDriver(driverData) {
  document.querySelector('.drivers').insertAdjacentHTML('beforeend', `
    <div class=".driver-${driverData.id} p-4 w-full md:w-1/2 lg:w-1/3">
      <div class="border h-full p-4 flex flex-col">
          <h2 class="text-lg font-bold mb-2">${driverData.name}</h2>
          <h1 class="italic mb-4">${driverData.email}</h1>
          <div class="mb-4"><img src="${driverData.profilePicUrl}">
        </div>
          <div class="mb-4 text-gray-900">
            I am the best driver in all of Chicago!
          </div>
        <div class="mt-auto text-yellow-500 text-2xl">$${driverData.fee}/hour</div>
      </div>
    </div>
  `)
}