let firebase = require('./firebase')

exports.handler = async function(event) {
    let db = firebase.firestore()
    let driverId = event.queryStringParameters.driverId
    // let driverProfileData = []
    let querySnapshot = await db.collection('drivers')
                                .doc(driverId)
                                .get()
    let driverProfile = querySnapshot.data()
    // driverProfileData.push({
    let driverProfileData = {
        name: driverProfile.name,
        phone: driverProfile.cellphone_number,
        email: driverProfile.email,
        fee: driverProfile.fee,
        profilePicUrl: driverProfile.profilepic,
        location: driverProfile.location,
        age: driverProfile.age,
        bio: driverProfile.description,
        state: driverProfile.state,
        funFact: driverProfile.funfact
    }

    return {
        statusCode: 200,
        body: JSON.stringify(driverProfileData)
      }
}