let firebase = require('./firebase')

exports.handler = async function (event) {
    let db = firebase.firestore()
    let driversData = []

    let driversQuery = await db.collection('drivers').get()

    let drivers = driversQuery.docs

    for (let i = 0; i < drivers.length; i++) {
        let driverId = drivers[i].id
        let driverData = drivers[i].data()

        driversData.push({
            id: driverId,
            name: driverData.name,
            email: driverData.email,
            fee: driverData.fee,
            profilePicUrl: driverData.profilepic,
            location: driverData.location
        })
    }

    return {
        statusCode: 200,
        body: JSON.stringify(driversData)
    }
}