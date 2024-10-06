
# ECOMAPI

**ECOMAPI** is an e-commerce platform API developed using Node.js and MongoDB. 
This project aims to provide the necessary API to manage products, users, orders, and payment operations for an e-commerce site.

## Features

- User registration and login (JWT-based authentication)
- Add, update, and delete products
- Cart and order management
- Payment processing
- Product search and filtering

## Technologies Used

- **Node.js**: Used for server-side JavaScript execution.
- **Express.js**: A Node.js framework used for building the API.
- **MongoDB**: NoSQL database for data management.
- **Mongoose**: Used for interacting with MongoDB.
- **JWT (JSON Web Token)**: Ensures secure user authentication.

## Installation and Setup

### Requirements

- [Node.js](https://nodejs.org/en/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/)

### Steps

1. Clone this repository:

   ```bash
   git clone https://github.com/Cerennly/ECOMAPI.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ECOMAPI
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start MongoDB and configure the `.env` file (e.g., database URI, JWT secret):

   ```
   MONGO_URI=mongodb://localhost:27017/ecomapi
   JWT_SECRET=your_secret_key
   ```

5. Start the server:

   ```bash
   npm start
   ```

   The API will be running on `http://localhost:5000` by default.

## API Endpoints

### Users

- **POST** `/api/users/register` – Register a new user
- **POST** `/api/users/login` – User login (returns JWT token)

### Products

- **GET** `/api/products` – Retrieve all products
- **POST** `/api/products` – Add a new product
- **PUT** `/api/products/:id` – Update a specified product
- **DELETE** `/api/products/:id` – Delete a specified product

### Orders

- **POST** `/api/orders` – Create a new order
- **GET** `/api/orders` – Retrieve user orders

## Contributors

- **Ceren** - Project developer

## License

This project is licensed under the MIT License.

