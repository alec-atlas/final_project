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
    <div class=".driver-${driver.id} p-4 md:w-1/3">
      <div class="border-2 border-yellow-500 md:h-104 p-4 flex flex-col bg-gray-50">
          <h2 class="text-lg font-bold mb-2">${driver.name}</h2>
          <h1 class="italic mb-4">${driver.city}, ${driver.state}</h1>
          <div class="mb-4"><img class="object-contain h-64 w-full object-center" src="${driver.profilePicUrl}">
        </div>
        <div class="mt-auto text-yellow-500 text-2xl font-bold">$${driver.fee}/hour</div>
      </div>
    </div>
    `)
  }