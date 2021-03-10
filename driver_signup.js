document.querySelector('form').addEventListener('submit', async function(event) {
    let driverName = document.querySelector('#name').value
    let driverEmail = document.querySelector('#email').value
    let driverPhone = document.querySelector('#phone').value
    let driverAge = document.querySelector('#age').value
    let driverLocation = document.querySelector('#location').value
    let driverProfilePicUrl = document.querySelector('#profilePicUrl').value
    let driverFee = document.querySelector('#fee').value

    await fetch('/.netlify/functions/create_driver', {
        method: 'POST',
        body: JSON.stringify({
            name: driverName,
            email: driverEmail,
            phone: driverPhone,
            age: driverAge,
            location: driverLocation,
            profilePicUrl: driverProfilePicUrl,
            fee: driverFee
        })
    })
})