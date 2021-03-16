let firebase = require('./firebase')

exports.handler = async function(event) {
    let db = firebase.firestore()
    
    let booking = JSON.parse(event.body)
    let bookingDate = booking.date
    let bookingTime = booking.time
    let bookingPickupAddress = booking.pickup
    let bookingDropoffAddress = booking.dropoff
    let bookingRider = booking.rider
    let bookingDriver = booking.driver

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
        body: JSON.stringify(newBooking)
    }
}