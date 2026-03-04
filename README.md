# Firebase eCommerce (React + Vite + Firestore)

A simple eCommerce app built with React + Vite that uses Firebase Authentication for users and Cloud Firestore for products and orders.

## Features

- Firebase Auth
  - Register with email/password
  - Login / Logout
- Products stored in Firestore (`products` collection)
- Cart using Redux Toolkit (saved in sessionStorage)
- Checkout creates an order in Firestore (`orders` collection)
- Basic navigation: Home / Products / Cart

## Tech Stack

- React + Vite
- Redux Toolkit
- Firebase Authentication
- Cloud Firestore

## Firestore Collections

### `products`

Example fields:

- `title` (string)
- `price` (number)
- `image` (string URL)
- `category` (string)

### `orders`

Example fields:

- `userId` (string)
- `email` (string)
- `items` (array of cart items)
- `total` (number)
- `createdAt` (timestamp)

## Getting Started (Run Locally)

1. Install dependencies:

```bash
npm install
```
