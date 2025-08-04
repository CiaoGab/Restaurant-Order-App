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

### DOM Manipulation
```javascript
// Dynamic element creation and insertion
const itemDiv = document.createElement('div')
itemDiv.innerHTML = `<div class="card">...</div>`
document.querySelector('main').prepend(itemDiv)
```

### Event Handling & Delegation
```javascript
// Efficient event delegation for dynamic buttons
document.querySelector('main').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-item')) {
        const itemIndex = parseInt(e.target.dataset.itemIndex)
        addToCart(menuArray[itemIndex])
    }
})
```

### Array Methods & State Management
```javascript
// Functional programming with array methods
const total = cart.reduce((sum, item) => sum + item.price, 0)
cart.forEach((item, index) => { /* render logic */ })
```

### ES6 Modules & Data Management
```javascript
// data.js - Clean data structure
export const menuArray = [
    {
        name: "Pizza",
        ingredients: ["pepperoni", "mushrom", "mozarella"],
        price: 14,
        imgUrl: "Assets/pizza.png"
    }
    // ... more items
]

// index.js - Import and use
import { menuArray } from './data.js'
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

## 🎯 Future Enhancements

- [ ] **State Management Refactor** - Implement proper cart state management (currently being refactored)
- [ ] **Local Storage Integration** - Cart persistence across browser sessions
- [ ] **Order History Tracking** - User order history and favorites
- [ ] **Multiple Payment Methods** - PayPal, Apple Pay integration
- [ ] **Item Customization** - Size options, special instructions
- [ ] **Admin Panel** - Menu management interface
- [ ] **Unit Testing** - Jest/Vitest test implementation
- [ ] **TypeScript Migration** - Type safety and better developer experience

## 🔍 Code Quality Features

- **Error Handling** - Input validation and edge case management
- **Accessibility** - Semantic HTML and keyboard navigation support
- **Performance** - Efficient DOM updates and event delegation
- **Maintainability** - Clean, documented code with consistent naming

## 📱 Responsive Design

The application is fully responsive and tested across:
- Desktop browsers (Chrome, Firefox, Safari)
- Tablet devices (iPad, Android tablets)
- Mobile devices (iOS, Android)

## 🤝 Contributing

While this is a personal learning project, I welcome feedback and suggestions! Feel free to:
- Open issues for bugs or improvements
- Submit pull requests for enhancements
- Provide code review feedback

## 📞 Contact

**Your Name** - [your.email@example.com](mailto:your.email@example.com)

- Portfolio: [your-portfolio.com](https://your-portfolio.com)
- LinkedIn: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- GitHub: [@your-username](https://github.com/your-username)

---

*This project demonstrates my journey in learning fundamental JavaScript concepts and building interactive web applications. It showcases my ability to write clean, maintainable code while implementing real-world functionality.*