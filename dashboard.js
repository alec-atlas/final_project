firebase.auth().onAuthStateChanged(async function (user) {
  if (user) {
    // console.log('signed in')

    // fetch all driver data from the get_drivers endpoint and render driver profiles
    let response = await fetch('/.netlify/functions/get_drivers')
    let drivers = await response.json()
    // console.log(drivers)
    for (let i = 0; i < drivers.length; i++) {
      let driver = drivers[i]
      renderDriver(driver)
    }

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

async function renderDriver(driver) {
  document.querySelector('.drivers').insertAdjacentHTML('beforeend', `
    <div class=".driver-${driver.id} p-4 md:w-1/3">
      <div class="border-2 border-yellow-500 md:h-104 p-4 flex flex-col bg-gray-50">
        <h2 class="text-lg font-bold mb-2">${driver.name}</h2>
        <h1 class="italic mb-4">${driver.address}, ${driver.city} ${driver.zip}</h1>
        <div class="mb-4"><img class="object-contain h-64 w-full object-center" src="${driver.profilePicUrl}"></div>
        <div class="mb-4 text-gray-900">About Me: ${driver.bio}</div>
        <div class="mt-auto text-yellow-500 text-2xl font-bold">$${driver.fee}/hour</div>
        <a href="driverProfile.html?driverId=${driver.id}">
          <button
            class="block text-white bg-yellow-500 rounded w-full my-4 py-2 font-bold text-xl uppercase mx-auto container">
            <span>Book a ride with me!</span>
          </button>
        </a>
      </div>
    </div>
  `)
}