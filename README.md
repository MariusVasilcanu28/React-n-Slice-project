# React 'n' Slice

React 'n' Slice is an innovative pizza ordering application built with React. It brings together the best practices of modern web development using React, Redux Toolkit, React Router, and Tailwind CSS—all while delivering a playful, component-driven user experience. With robust state management, persistent order history, and automatic status updates, the app ensures you never lose track of your orders.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Key Features](#key-features)
3. [Order Management](#order-management)
4. [Technology Stack](#technology-stack)
5. [Getting Started](#getting-started)
6. [Deployment](#deployment)
7. [License](#license)

---

## Project Overview

React 'n' Slice is designed to offer users a simple yet engaging way to browse a curated pizza menu, customize their orders, and quickly place them—all without requiring a full user account system. The app demonstrates modern React development with Redux Toolkit for state management, React Router for seamless navigation, and Tailwind CSS for responsive styling. In addition, orders persist across sessions and are automatically updated (e.g., marked as fulfilled once the delivery time is reached) so you can review your order history anytime.

> **Note:**
>
> - The payment process is entirely fictive; no actual payment processing occurs.
> - The app currently features a simulated login for demonstration purposes, with plans to integrate a full authentication system in the future.

---

## Key Features

- **Interactive Menu Display:**  
  Browse a curated list of pizzas with detailed descriptions and images.
- **Dynamic Cart Management:**  
  Add, update, and remove pizzas from your cart with real-time state updates powered by Redux Toolkit.
- **Fictive Order Placement Flow:**  
  Simulate collecting user details and finalizing an order.
- **Simulated Authentication:**  
  Enjoy a demo login flow that paves the way for full authentication in future releases.
- **Client-Side Routing:**  
  Seamless navigation using React Router.
- **Responsive Design:**  
  Built with Tailwind CSS to ensure a polished look on desktops, tablets, and mobile devices.

---

## Order Management

- **Persistent Order History:**  
  Orders are saved in the Redux store (persisted via redux‑persist) so you can review them even after a page refresh.
- **Automatic Status Updates:**  
  A background Order Status Checker automatically updates orders from "preparing" or "ongoing" to "fulfilled" when their estimated delivery time passes.
- **Order Deletion:**  
  Easily remove orders from your order history with a simple delete action.
- **Navigation:**  
  A dedicated Order History page (accessible via the app’s navigation) lets you review both ongoing and fulfilled orders at any time.

---

## Technology Stack

- **React:** Core library for building the user interface.
- **Redux Toolkit (RTK):** Robust state management for user, cart, and order data.
- **React Router:** Client-side routing for seamless navigation.
- **Tailwind CSS:** Utility-first styling for rapid, responsive UI development.
- **API Integration:** Fetches data from a fully functional API supporting GET, PUT, POST, and PATCH methods.
