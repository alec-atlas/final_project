firebase.auth().onAuthStateChanged(async function (user) {
    if (user) {
        // let db = firebase.firestore()
        let queryString = new URLSearchParams(document.location.search)
        let driverId = queryString.get('driverId')
        let response = await fetch(`/.netlify/functions/get_driver_profile?driverId=${driverId}`)
        let driver = await response.json()
        console.log(driver)
        renderDriverProfile(driver)

        document.querySelector('form').addEventListener('submit', async function (event) {
    
            let requestDate = document.querySelector('#date').value
            let requestTime = document.querySelector('#time').value
            let requestPickup = document.querySelector('#pickup').value
            let requestDropoff = document.querySelector('#dropoff').value
            let requestRiderId = user.uid

            console.log(requestDate)
        
            await fetch('/.netlify/functions/create_booking', {
                method: 'POST',
                body: JSON.stringify({
                    date: requestDate,
                    time: requestTime,
                    pickup: requestPickup,
                    dropoff: requestDropoff,
                    rider: requestRiderId,
                    driver: driverId
                })
            })
        })

        document.querySelector('.sign-in-or-sign-out').innerHTML = `
                <button class="text-pink-500 underline sign-out">Sign Out</button>
            `

        document.querySelector('.sign-out').addEventListener('click', function (event) {
            console.log('sign out clicked')
            firebase.auth().signOut()
            document.location.href = 'index.html'
        })
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

async function renderDriverProfile(driver) {
    document.querySelector('.driverProfile').insertAdjacentHTML('beforeend', `
        <div class="mt-8 w-3/4 md:w-1/2 mx-auto flex flex-wrap">
            <div class="border p-4 w-full">
                <div class="h-full p-4 flex flex-col">
                    <h2 class="font-bold mb-1 flex justify-start">
                        <span class="text-4xl w-1/2">${driver.name}</span>
                        <p class="mt-auto text-yellow-500 text-2xl text-right w-1/2">$${driver.fee}/hour</p>
                    </h2>  
                </div>
            </div>
        </div>

        <div class="my-8 w-1/2 mx-auto md:flex md:flex-wrap">
            <div class="border container mx-auto md:p-4 w-full">
                <div class="p-4 md:p-2 md:flex">
                    <div class="md:w-1/2 p-2"><img src="${driver.profilePicUrl}"></div>
                    <div class="md:w-1/2 p-2">
                        <div class="text-2xl font-bold text-gray-900">Driver Info:</div>
                            <ul class="list-disc ml-6">
                                <li>Age: ${driver.age}</li>
                                <li>Location: ${driver.location}</li>
                                <li>About Me: ${driver.bio}</li>
                                <li>Fun Fact: ${driver.funFact}</li>
                                <li>Contact Me: ${driver.phone}</li>
                            </ul>  
                    </div>
                </div>  
            </div>
        </div>
    `)
}

// DRIVER PROFILE
// document.querySelector('.driverProfile').insertAdjacentHTML('beforeend', `
//         <div class="mt-8 flex flex-wrap">
//             <div class="border p-4 w-full">
//                 <div class="h-full p-4 flex flex-col">
//                     <h2 class="font-bold mb-1 flex justify-start">
//                         <span class="text-4xl w-1/2">${driver.name}</span>
//                         <p class="mt-auto text-yellow-500 text-2xl text-right w-1/2">$${driver.fee}/hour</p>
//                     </h2>  
//                     <div class="justify-end flex mb-4">
//                         <button class="block mt-4 text-white bg-yellow-500 rounded px-4 py-2">Book a ride!</button>
//                     </div>
//                 </div>
//             </div>
//         </div>

//         <div class="mt-8 mb-8 md:flex md:flex-wrap">
//             <div class="border md:p-4 w-full">
//                 <div class="md:p-4 md:flex">
//                     <div class="md:w-1/2 p-2"><img src="${driver.profilepic}"></div>
//                     <div class="md:w-1/2 p-2">
//                         <div class="text-2xl font-bold text-gray-900">About Driver:</div>
//                             <ul class="list-disc ml-6">
//                                 <li>Age: ${driver.age}</li>
//                                 <li>Location: ${driver.location}</li>
//                                 <li>Start Date: ${driver.Start_date}</li>
//                                 <li>Rides given: 52</li>
//                                 <li>Rating: ${driver.rating}% of riders recommend ${driver.name}</li>
//                                 <li>Talk to me about: ${driver.talking_points}</li>
//                                 <li>Personal information: ${driver.about_driver}</li>
//                             </ul>  
//                     </div>
//                 </div>  
//             </div>
//         </div>
//     `)

// }
