let firebase = require('./firebase')

exports.handler = async function(event) {
    let db = firebase.firestore()
    let driversData = []

    let driversQuery = await db.collection('drivers')
                               .orderBy('created')
                               .get()

    let drivers = driversQuery.docs

    for (let i = 0; i < drivers.length; i++) {
        let driverId = drivers[i].driverId
        let driverData = drivers[i].data()
        
    }
}