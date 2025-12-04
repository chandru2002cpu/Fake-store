# Fake Store - Shopping Cart Application

A modern, responsive ReactJS application that integrates with the Fake Store API to display products and manage a shopping cart using modal interfaces.

## 📦 Live Demo

[Deploy your own](QUICK-DEPLOY.md) | [Detailed Deployment Guide](DEPLOYMENT.md)

## 🚀 Features

- **Product Display**: Fetches and displays products from the Fake Store API
- **Category Filtering**: Filter products by category (electronics, jewelry, men's clothing, women's clothing)
- **Product Sorting**: Sort by price, name, or rating
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Shopping Cart**: Add products to cart with visual feedback
- **Duplicate Prevention**: Alert message when attempting to add already-added items
- **Cart Modal**: Interactive modal showing all cart items
- **Remove Functionality**: Easy removal of items from the cart
- **Real-time Updates**: Cart count updates instantly in the navbar
- **Modern UI**: Beautiful design with Tailwind CSS animations and gradients
- **Loading States**: Smooth loading indicators during data fetch
- **Error Handling**: Graceful error handling with user-friendly messages

## 🛠️ Tech Stack

- **ReactJS** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **JavaScript (ES6+)** - Programming language
- **Fake Store API** - Product data source

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**

## 🔧 Installation

Follow these steps to set up and run the project locally:

1. **Navigate to the project directory:**
   ```bash
   cd "Fake Store API"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🚀 Running the Application

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser and visit:**
   ```
   http://localhost:5173
   ```

   The application will automatically reload when you make changes to the code.

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 🚀 Deployment

This project is ready to deploy on Netlify!

💡 **Quick Start**: See [QUICK-DEPLOY.md](QUICK-DEPLOY.md) for a quick reference guide

📚 **Detailed Guide**: See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions

### **Quick Deploy via GitHub**

1. **Push to GitHub:**
   ```bash
   # Create a new repository on GitHub (https://github.com/new)
   # Then run these commands:
   
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"Deploy with GitHub"**
   - Select your repository
   - Netlify will automatically detect the settings from `netlify.toml`
   - Click **"Deploy site"**

   Your site will be live in minutes! 🎉

#### **Option 2: Deploy via Netlify CLI**

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build your project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   # For a draft deploy
   netlify deploy
   
   # For production deploy
   netlify deploy --prod
   ```

#### **Option 3: Drag and Drop Deploy**

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Deploy:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag and drop your `dist` folder
   - Your site will be live instantly!

### **Environment Variables**

This project doesn't require any environment variables as it uses the public Fake Store API.

### **Custom Domain**

After deployment, you can add a custom domain:
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the instructions to configure your domain

## 📁 Project Structure

```
Fake Store API/
├── public/                 # Public assets
├── src/
│   ├── App.jsx            # Main application component
│   ├── Navbar.jsx         # Navigation bar with cart button
│   ├── ProductCard.jsx    # Individual product card component
│   ├── CartModal.jsx      # Cart modal component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles with Tailwind directives
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

## 🎯 Component Overview

### **App.jsx**
- Main component managing application state
- Fetches products and categories from Fake Store API
- Implements category filtering and product sorting
- Handles cart operations (add/remove)
- Manages modal visibility
- Uses multiple useEffect hooks for data fetching and sorting

### **Navbar.jsx**
- Displays application header
- Shows cart button with item count badge
- Receives props: `cartCount`, `onCartClick`

### **ProductCard.jsx**
- Displays individual product information
- Shows product image, title, price, rating, and category
- Add to cart button with visual feedback
- Receives props: `product`, `onAddToCart`, `isInCart`

### **CartModal.jsx**
- Modal dialog for cart management
- Lists all cart items with images and details
- Remove from cart functionality
- Displays total price
- Receives props: `isOpen`, `onClose`, `cartItems`, `onRemoveFromCart`

## 🎨 Key Features Explained

### **API Integration**
- Fetches data from multiple Fake Store API endpoints
- **Categories API**: Dynamically loads all available categories
- **Products API**: Fetches all products or filters by category
- Real-time filtering based on category selection

### **Product Filtering & Sorting**
- **Category Filter**: Filter products by electronics, jewelry, men's clothing, women's clothing
- **Sort Options**:
  - Default (as returned by API)
  - Price: Low to High
  - Price: High to Low
  - Name: A to Z
  - Name: Z to A
  - Highest Rated
- Client-side sorting for instant results

### **Product Fetching**
- Uses React's `useEffect` hook to fetch data on component mount
- Implements loading and error states for better UX
- Refetches products when category changes

### **Cart Management**
- State-based cart system using React hooks
- Prevents duplicate items with alert notifications
- Instant UI updates when items are added/removed

### **Props Flow**
- Data flows from parent (App) to child components
- Clean component communication through props
- Callback functions for state updates

### **Responsive Design**
- Mobile-first approach
- Grid layouts that adapt to screen sizes
- Touch-friendly buttons and interactions

## 🌐 API Reference

This project uses the [Fake Store API](https://fakestoreapi.com/) with multiple endpoints:

### **Endpoints Used**

1. **Get All Products**
   - **Endpoint**: `https://fakestoreapi.com/products`
   - **Method**: GET
   - **Description**: Fetches all products from the store
   - **Response**: Array of product objects

2. **Get All Categories**
   - **Endpoint**: `https://fakestoreapi.com/products/categories`
   - **Method**: GET
   - **Description**: Fetches all available product categories
   - **Response**: Array of category names

3. **Get Products by Category**
   - **Endpoint**: `https://fakestoreapi.com/products/category/{categoryName}`
   - **Method**: GET
   - **Description**: Fetches products filtered by specific category
   - **Response**: Array of product objects in that category

### **Product Object Structure**
```json
{
  "id": 1,
  "title": "Product Name",
  "price": 109.95,
  "description": "Product description",
  "category": "electronics",
  "image": "https://...",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

## 🎨 Styling

The application uses **Tailwind CSS** for all styling:
- Utility-first CSS classes
- Custom gradient backgrounds
- Hover effects and transitions
- Responsive breakpoints
- Animation utilities

## 🔍 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Code Quality

- Clean, readable, and well-documented code
- JSDoc comments for component props
- Consistent naming conventions
- Modular component structure

## 🐛 Troubleshooting

### Issue: Dependencies not installing
**Solution**: Clear npm cache and try again
```bash
npm cache clean --force
npm install
```

### Issue: Port 5173 already in use
**Solution**: The dev server will automatically use the next available port, or you can specify a different port in `vite.config.js`

### Issue: Tailwind styles not applying
**Solution**: Ensure Tailwind directives are present in `src/index.css` and the build process has restarted

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

Built with ❤️ using ReactJS and Tailwind CSS

---

**Happy Shopping! 🛍️**
