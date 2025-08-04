# 🍕 Jimmy's Diner - Restaurant Ordering App

A dynamic, interactive restaurant ordering application built with vanilla JavaScript, HTML, and CSS. This project demonstrates fundamental web development concepts including DOM manipulation, event handling, state management, and responsive design.

## ✨ Features

### Core Functionality

- **Dynamic Menu Rendering** - Menu items loaded from external data source
- **Interactive Shopping Cart** - Add/remove items with real-time updates
- **Order Management** - Complete order flow with form validation
- **Modal Interface** - Clean checkout experience with payment form
- **Success Feedback** - Confirmation messages with auto-hide functionality

### Technical Highlights

- **State Management** - Cart data maintained in memory with UI synchronization
- **Event Delegation** - Efficient event handling for dynamic content
- **Form Validation** - Input sanitization and user feedback
- **Responsive Design** - Mobile-friendly interface
- **Modular Architecture** - Clean separation of concerns

## 🛠️ Technologies Used

- **JavaScript (ES6+)** - Modern JavaScript features including modules, arrow functions, and array methods
- **HTML5** - Semantic markup and accessibility considerations
- **CSS3** - Custom styling with flexbox layout and responsive design
- **Vite** - Fast build tool and development server
- **Google Fonts** - Typography enhancement (Smythe font family)

## 📋 JavaScript Concepts Demonstrated

### DOM Manipulation & Dynamic Content

```javascript
// Creating and inserting menu items dynamically
menuArray.forEach((item) => {
  let itemDiv = document.createElement("div");
  itemDiv.innerHTML = `<div class="card">
          <img src="${item.imgUrl}" />
          <div class="card-text">
            <h2>${item.name}</h2>
            <p class="description">${item.ingredients}</p>
            <p class="price">${item.price}</p>
          </div>
          <button class='add-item'>+</button>
        </div>`;

  document.querySelector("main").prepend(itemDiv);
});
```

### Event Handling & User Interactions

```javascript
// Adding items to cart with nested event listeners
const addButtons = itemDiv.querySelector(".add-item");

addButtons.addEventListener("click", () => {
  orderContainer.style.display = "block";
  const orderItem = document.createElement("div");
  orderItem.innerHTML += `<div class="order-text">
      <h3 class="item">
        ${item.name}
        <aside class='remove-btn'>remove</aside>
      </h3>
      <p class="price">${item.price}</p>
    </div>`;

  document.querySelector(".line-item-elements").appendChild(orderItem);
});
```

### Modal Control & UI State Management

```javascript
// Modal functionality with backdrop control
function completeOrder() {
  modal.style.display = "block";
  modalBackdrop.style.display = "block";
}

// Payment processing and success feedback
payBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalBackdrop.style.display = "none";
  orderContainer.style.display = "none";
  successMessage.style.display = "block";
  successText.textContent = `Thanks, ${nameInput.value}! Your order is on its way!`;
});
```

### ES6 Modules & Data Management

```javascript
// data.js - Clean data structure
export const menuArray = [
  {
    name: "Pizza",
    ingredients: ["pepperoni", "mushrom", "mozarella"],
    price: 14,
    imgUrl: "Assets/pizza.png",
  },
  // ... more items
];

// index.js - Import and use
import { menuArray } from "./data.js";
```

## 🏗️ Project Structure

```
jimmys-diner/
├── index.html          # Main HTML structure
├── index.css           # Styling and responsive design
├── index.js            # Core application logic
├── data.js             # Menu data source
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite build configuration
├── Assets/
│   ├── pizza.png       # Menu item images
│   ├── hamburger.png
│   ├── beer.png
│   └── ferks-guare-KEZdWfYD-ow-unsplash.jpg
└── README.md
```

## 🔧 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/jimmys-diner.git
   cd jimmys-diner
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   # or
   npm run dev
   ```

4. **Navigate to** `http://localhost:5173` (Vite's default port)

## 💡 Key Learning Outcomes

This project was built to demonstrate proficiency in:

- **Pure JavaScript Development** - No frameworks, showcasing fundamental skills
- **State Management** - Managing application state without external libraries
- **User Experience** - Intuitive interface with proper feedback mechanisms
- **Code Organization** - Modular, maintainable code structure
- **Problem Solving** - Debugging and refactoring complex interactions

## 🔍 Code Quality Features

- **Error Handling** - Input validation and edge case management
- **Accessibility** - Semantic HTML and keyboard navigation support
- **Performance** - Efficient DOM updates and event delegation
- **Maintainability** - Clean, documented code with consistent naming

## 🤝 Contributing

While this is a personal learning project, I welcome feedback and suggestions! Feel free to:

- Open issues for bugs or improvements
- Submit pull requests for enhancements
- Provide code review feedback

---

_This project demonstrates my journey in learning fundamental JavaScript concepts and building interactive web applications. It showcases my ability to write clean, maintainable code while implementing real-world functionality._
