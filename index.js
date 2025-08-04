import { menuArray } from './data.js'

const orderContainer = document.getElementById('order-container')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('close')
const completeOrderBtn = document.getElementById('complete-order-btn')
const modalBackdrop = document.getElementById('modal-backdrop')
const payBtn = document.getElementById('pay-btn')
const successMessage = document.getElementById('success-message')

// insert data.js items into html
menuArray.forEach((item)=>{
    let itemDiv = document.createElement('div')
    itemDiv.innerHTML =  `<div class="card">
          <img src="${item.imgUrl}" />
          <div class="card-text">
            <h2>${item.name}</h2>
            <p class="description">${item.ingredients}</p>
            <p class="price">$${item.price}</p>
          </div>
          <button class='add-item'>+</button>
        </div>`
    
    document.querySelector('main').prepend(itemDiv)


//    Add button functionality
    const addButtons = itemDiv.querySelector('.add-item')
    
    addButtons.addEventListener('click', ()=>{
        orderContainer.style.display= 'block'
            const orderItem = document.createElement('div')
            orderItem.innerHTML += 
            `<div class="order-text">
              <h3 class="item">
                ${item.name}
                <aside class='remove-btn'>remove</aside>
              </h3>
              <p class="price">$${item.price}</p>
            </div>`

            document.querySelector('.line-item-elements').appendChild(orderItem)
            
            const removeBtn = orderItem.querySelector('.remove-btn');

            removeBtn.addEventListener('click', ()=>{
                orderItem.remove();
                if (orderItem.length <= 1) {
                    orderContainer.style.display = 'none'
                }
            })
        })
    })

function completeOrder() {
       modal.style.display = 'block'
       modalBackdrop.style.display = 'block'
    }

// Modal Elements


completeOrderBtn.addEventListener('click', completeOrder)
closeModal.addEventListener('click', ()=>{
   modal.style.display = 'none'
   modalBackdrop.style.display = 'none'
})


// Success Message
const nameInput = document.getElementById('name-input')
const successText = document.getElementById('success-text')

payBtn.addEventListener('click', ()=>{
    modal.style.display = 'none'
    modalBackdrop.style.display = 'none'
    orderContainer.style.display = 'none'
    orderContainer.innerHTML = ''
    successMessage.style.display = 'block'
    successText.textContent = `Thanks, ${nameInput.value}! Your order is on its way!`

})









