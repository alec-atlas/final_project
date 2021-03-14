let firebase = require('./firebase')

exports.handler = async function(event) {
    let db = firebase.firestore()
    let driverId = event.queryStringParameters.driverId
    let driverProfileData = []
    let querySnapshot = await db.collection('drivers')
                                .where('driverId', '==', driverId)
                                .get()
    let driverProfile = querySnapshot.docs
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