async function pageLoaded() {
    let response = await fetch('https://kiei451.com/api/products.json')
    let json = await response.json()

    console.log(json)
  
    let products = json.products
  
    let renderProduct = function(product) {
      return `
      <div class="p-4 w-full md:w-1/2 lg:w-1/3">
        <div class="border h-full p-4 flex flex-col">
            <h2 class="text-lg font-bold mb-4">${product.name}</h2>
            <div class="mb-4"><img src="${product.image}">
          </div>
            <div class="mb-4 text-gray-900">
              ${product.description}
            </div>
          <div class="mt-auto text-purple-500 text-2xl">$${product.price}</div>
        </div>
      </div>
      `
    }
  
    for(let i = 0; i < products.length; i++){
      let product = products[i]
      let element = document.querySelector('.products')
      element.insertAdjacentHTML('beforeend',renderProduct(product)) 
    }
  }
  
  window.addEventListener('DOMContentLoaded', pageLoaded)