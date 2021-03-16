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
            address: driverData.location,
            phone: driverData.cellphone_number,
            city: driverData.city,
            county: driverData.county,
            zip: driverData.zip,
            bio: driverData.description,
            funFact: driverData.funfact
        })
    }

    return {
        statusCode: 200,
        body: JSON.stringify(driversData)
    }
}