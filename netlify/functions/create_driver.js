let firebase = require('./firebase')

exports.handler = async function(event) {
    let db = firebase.firestore()
    
    let driver = JSON.parse(event.body)
    let driverName = driver.name
    let driverEmail = driver.email
    let driverPhone = driver.phone
    let driverAge = driver.age
    let driverLocation = driver.location
    let driverProfilePicUrl = driver.profilePicUrl
    let driverRate = driver.rate

    let newDriver = {
        name: driverName,
        email: driverEmail,
        cellphone_number: driverPhone,
        age: driverAge,
        location: driverLocation,
        profilepic: driverProfilePicUrl,
        rate: driverRate
    }

    let docref = await db.collection('drivers').add(newDriver)

    newDriver.id = docref.id

    return {
        statusCode: 200,
        body: JSON.stringify(newDriver)
    }
}