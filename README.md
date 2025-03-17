# 🛍️ FabricShop

Online Clothing Store using the MERN stack

🖼️ Screenshot![FabricShop](https://github.com/user-attachments/assets/e55601b1-11ea-4cd0-9dc1-a9e06eb0e2ce)
## ✨ Features

- ⭐ Product reviews and ratings
- 📄 Product pagination
- 🔎 Product search feature
- 👤 User profile with orders
- 🛒 Full-featured shopping cart
- 🛠️ Admin product management
- 👥 Admin user management
- 📦 Admin order details page
- ✅ Mark orders as delivered option
- 🚚 Checkout process (shipping, payment method, etc.)
- 💳 PayPal / credit card integration
- 📊 Database seeder (products & users)

## 🏗️ Technology Stack

- ⚡ Node.js
- 🚀 Express.js
- 🗄️ MongoDB
- 🔐 JWT Authentication
- ⚛️ React
- 🎨 React Bootstrap
- 🔄 Redux
- 💰 React PayPal Button V2

## 🛠️ Usage

### ⚙️ Environment Variables

Create a `.env` file in the root directory and add the following:

```
NODE_ENV=development
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

### 📦 Install Dependencies

```
npm install
cd frontend
npm install
```

### 🚀 Run the Application

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

### 📊 Seed Database

You can use the following commands to seed the database with sample users and products, as well as to delete all data:

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

## ℹ️ Project Information

- **📌 Version:** 1.0.0
- **📜 License:** MIT
- **👩‍💻 Author:** Sowmya
