let firebase = require('./firebase')

exports.handler = async function(event) {
    let db = firebase.firestore()
    
    let booking = JSON.parse(event.body)
    let bookingDate = booking.name
    let bookingTime = booking.email
    let bookingPickupAddress = booking.phone
    let bookingDropoffAddress = booking.age
    let bookingRider = booking.location
    let bookingDriver = booking.profilePicUrl

    let newBooking = {
        date: bookingDate,
        time: bookingTime,
        pickupAddress: bookingPickupAddress,
        dropoffAddress: bookingDropoffAddress,
        riderId: bookingRider,
        driverId: bookingDriver
    }

    let docref = await db.collection('bookings').add(newBooking)

    newBooking.id = docref.id

    return {
        statusCode: 200,
        body: JSON.stringify(newDriver)
    }
}