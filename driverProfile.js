window.addEventListener('DOMContentLoaded', async function (event) {
    // let db = firebase.firestore()
    let queryString = new URLSearchParams(document.location.search)
    let driverId = queryString.get('driverId')
    let response = await fetch(`/.netlify/functions/get_driverProfile?driverId=${driverId}`)
    let driver = response.json()
    console.log(driver)

    // document.querySelector('.sign-in-or-sign-out').innerHTML = `
    //         <button class="text-pink-500 underline sign-out">Sign Out</button>
    //     `

    // document.querySelector('.sign-out').addEventListener('click', function (event) {
    //     console.log('sign out clicked')
    //     firebase.auth().signOut()
    //     document.location.href = 'index.html'
    // })
})

async function renderDriverProfile(driver) {

}

document.querySelector('form').addEventListener('submit', async function(event) {
    let requestDate = document.querySelector('#date').value
    let requestTime = document.querySelector('#time').value
    let requestPickup = document.querySelector('#pickup').value
    let requestDropoff = document.querySelector('#dropoff').value
    let requestRiderId = []
    let requestDriverId = []

    await fetch('/.netlify/functions/create_booking', {
        method: 'POST',
        body: JSON.stringify({
            date: requestDate,
            time: requestTime,
            pickup: requestPickup,
            dropoff: requestDropoff,
            rider: requestRiderId,
            driver: requestDriverId
        })
    })
})
// DRIVER PROFILE
// document.querySelector('.driverProfile').insertAdjacentHTML('beforeend', `
//     <div class="mt-8 flex flex-wrap">
//         <div class="border p-4 w-full">
//             <div class="h-full p-4 flex flex-col">
//                 <h2 class="font-bold mb-1 flex justify-start">
//                     <span class="text-4xl w-1/2">${driverId.name}</span>
//                     <p class="mt-auto text-yellow-500 text-2xl text-right w-1/2">$${driverId.fee}/hour</p>
//                 </h2>  
//                 <div class="justify-end flex mb-4">
//                     <button class="block mt-4 text-white bg-yellow-500 rounded px-4 py-2">Book a ride!</button>
//                 </div>
//             </div>
//         </div>
//     </div>

//     <div class="mt-8 mb-8 md:flex md:flex-wrap">
//         <div class="border md:p-4 w-full">
//             <div class="md:p-4 md:flex">
//                 <div class="md:w-1/2 p-2"><img src="${driverId.profilepic}"></div>
//                 <div class="md:w-1/2 p-2">
//                     <div class="text-2xl font-bold text-gray-900">About Driver:</div>
//                         <ul class="list-disc ml-6">
//                             <li>Age: ${driverId.age}</li>
//                             <li>Location: ${driverId.location}</li>
//                             <li>Start Date: ${driverId.Start_date}</li>
//                             <li>Rides given: 52</li>
//                             <li>Rating: ${driverId.rating}% of riders recommend Alec</li>
//                             <li>Talk to me about: ${driverId.talking_points}</li>
//                             <li>Personal information: ${driverId.about_driver}</li>
//                         </ul>  
//                 </div>
//             </div>
//             <div class="pl-6 pb-6">
//                 <button class="block text-white bg-yellow-500 rounded px-4 py-2">Book a ride!</button>
//             </div>      
//         </div>
//     </div>
//     `)

// }
