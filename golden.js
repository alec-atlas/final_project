window.addEventListener('DOMContentLoaded', async function(event) {
    let response = await fetch('/.netlify/functions/get_drivers')
    let drivers = await response.json()
    // console.log(drivers)
    for (let i = 0; i < drivers.length; i++) {
        let driver = drivers[i]
        renderDriver(driver)
    }
})

async function renderDriver(driver) {
    document.querySelector('.drivers').insertAdjacentHTML('beforeend', `
      <div class=".driver-${driver.id} p-4 md:w-1/2 lg:w-1/3">
        <div class="border-2 border-yellow-500 h-full p-4 flex flex-col bg-gray-50">
            <h2 class="text-lg font-bold mb-2">${driver.name}</h2>
            <img class="mb-4" src="${driver.profilePicUrl}">
            <div class="mb-4 text-gray-900">${driver.location}</div>
          <div class="mt-auto text-yellow-500 text-2xl font-bold">$${driver.fee}/hour</div>
        </div>
      </div>
    `)
  }