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
    let driverFee = driver.fee
    let driverFunFact = driver.fun_fact 
    let driverDescription = driver.description
    let driverCounty = driver.county
    let driverCity = driver.city
    let driverState= driver.state
    let driverZip = driver.zip

    let newDriver = {
        name: driverName,
        email: driverEmail,
        cellphone_number: driverPhone,
        age: driverAge,
        location: driverLocation,
        profilepic: driverProfilePicUrl,
        fee: driverFee,
        fun_fact: driverFunFact,
        description: driver.description,
        county: driver.county,
        city: driver.city,
        zip: driver.zip
    }

    let docref = await db.collection('drivers').add(newDriver)

    newDriver.id = docref.id

    return {
        statusCode: 200,
        body: JSON.stringify(newDriver)
    }
}