let firebase = require('./firebase')

exports.handler = async function(event) {
    let queryStringDriverId = event.queryStringParameters.driverId
    let driverProfileData = []
    let driverProfile = await db.collection('drivers')
                                .doc(queryStringDriverId)
                                .get()
    driverProfileData.push({
        name: driverProfile.name,
        phone: driverProfile.cellphone_number,
        email: driverProfile.email,
        fee: driverProfile.fee,
        profilePicUrl: driverProfile.profilepic,
        location: driverProfile.location,
        age: driverProfile.age
        //add more profile items here
    })

    return {
        statusCode: 200,
        body: JSON.stringify(driverProfileData)
      }
}