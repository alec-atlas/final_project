let db = firebase.firestore()

// firebase.auth().onAuthStateChanged(async function(user) {
    // if (user) {
    //   // Signed in
    //   console.log('signed in')
    //   // Ensure the signed-in user is in the users collection
    //   db.collection('users').doc(user.uid).set({
    //     name: user.displayName,
    //     email: user.email
    //   })

let querySnapshot = await db.collection('drivers').get()

console.log(querySnapshot)
// let Id = w4jzlA6J9BIikozKY3b4
// let driverId = drivers.Id

// let drivers = querySnapshot.docs
// for (let i=0; i<drivers.length; i++) { 
//     let driverId = drivers[i].id
//     let driverName = drivers[i].driverName
//     let driverRating = drivers[i].rating
//     let driverLocation = drivers[i].location
//     let driverPicture = drivers[i].profilepic
//     let driverAge = drivers[i].age
//     let driverAbout = drivers[i].about_driver
//     let driverTalkingPoints = drivers[i].talking_points
//     let driverStartDate = drivers[i].start_date
//     let driverEmail = drivers[i].email
//     let driverPhone = drivers[i].cellphone_number

    // DRIVER PROFILE
    document.querySelector('.driverProfile').insertAdjacentHTML('beforeend', `
    <div class="mt-8 flex flex-wrap">
        <div class="border p-4 w-full">
            <div class="h-full p-4 flex flex-col">
                <h2 class="font-bold mb-1 flex justify-start">
                    <span class="text-4xl w-1/2">${driverId.name}</span>
                    <p class="mt-auto text-yellow-500 text-2xl text-right w-1/2">$${driverId.fee}/hour</p>
                </h2>  
                <div class="justify-end flex mb-4">
                    <button class="block mt-4 text-white bg-yellow-500 rounded px-4 py-2">Book a ride!</button>
                </div>
            </div>
        </div>
    </div>

    <div class="mt-8 mb-8 md:flex md:flex-wrap">
        <div class="border md:p-4 w-full">
            <div class="md:p-4 md:flex">
                <div class="md:w-1/2 p-2"><img src="${driverId.profilepic}"></div>
                <div class="md:w-1/2 p-2">
                    <div class="text-2xl font-bold text-gray-900">About Driver:</div>
                        <ul class="list-disc ml-6">
                            <li>Age: ${driverId.age}</li>
                            <li>Location: ${driverId.location}</li>
                            <li>Start Date: ${driverId.Start_date}</li>
                            <li>Rides given: 52</li>
                            <li>Rating: ${driverId.rating}% of riders recommend Alec</li>
                            <li>Talk to me about: ${driverId.talking_points}</li>
                            <li>Personal information: ${driverId.about_driver}</li>
                        </ul>  
                </div>
            </div>
            <div class="pl-6 pb-6">
                <button class="block text-white bg-yellow-500 rounded px-4 py-2">Book a ride!</button>
            </div>      
        </div>
    </div>
    `)

// }
