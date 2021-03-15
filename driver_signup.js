document.querySelector('form').addEventListener('submit', async function(event) {
    let driverName = document.querySelector('#name').value
    let driverEmail = document.querySelector('#email').value
    let driverPhone = document.querySelector('#phone').value
    let driverAge = document.querySelector('#age').value
    let driverLocation = document.querySelector('#location').value
    let driverProfilePicUrl = document.querySelector('#profilePicUrl').value
    let driverFee = document.querySelector('#fee').value   
    let driverFunFact = document.querySelector('#funfact').value
    let driverDescription = document.querySelector('#description').value
    let driverCounty = document.querySelector('#county').value
    let driverCity = document.querySelector('#city').value
    let driverState= document.querySelector('#state').value
    let driverZip = document.querySelector('#zip').value

    await fetch('/.netlify/functions/create_driver', {
        method: 'POST',
        body: JSON.stringify({
            name: driverName,
            email: driverEmail,
            phone: driverPhone,
            age: driverAge,
            location: driverLocation,
            profilePicUrl: driverProfilePicUrl,
            fee: driverFee,
            funfact: driverFunFact,
            description: driverDescription,
            county: driverCounty,
            city: driverCity,
            state: driverState,
            zip: driverZip
        })
    })
})