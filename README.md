# 🚗 Car Xpress Premium – Modern Car Rental Marketplace

**Live Site:** [https://car-xpress-premium.vercel.app/](https://car-xpress-premium.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-16.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0-blue?logo=react)
![Firebase](https://img.shields.io/badge/Firebase-Auth-yellow?logo=firebase)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-v5-FF4154?logo=reactquery)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-4EA94B?logo=mongodb)
![Express.js](https://img.shields.io/badge/Express.js-API-000000?logo=express)
![Node.js](https://img.shields.io/badge/Node.js-Backend-68A063?logo=node.js)
![JWT](https://img.shields.io/badge/JWT-Secure-orange?logo=jsonwebtokens)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animation-FF4154?logo=framer)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwindcss)
![DaisyUI](https://img.shields.io/badge/DaisyUI-v5-5A0EF8?logo=daisyui)

---

## 🚘 Project Overview
**Car Xpress Premium** is a seamless car rental platform that connects car owners with potential renters.
Designed with **Next.js 16** and **React 19**, it offers a high-performance user experience. Users can list their own vehicles for rent **(Restricted to Maximum 5)**, manage their listings, and communicate directly with other owners via email or phone. The platform ensures security through Firebase Authentication and JWT-protected API routes.

---

## 🌟 Key Features

### 👤 User Experience
* **Authentication:** Secure login and registration using Firebase (Email/Password & Google Social Login).
* **Responsive Design:** Fully responsive UI built with **Tailwind CSS v4** and **DaisyUI v5**.
* **Interactive UI:** Smooth animations using `framer-motion` and engaging toasts/alerts via `react-hot-toast` and `sweetalert2`.

### 🚙 Car Management (Core Functionality)
* **Add Cars:** Authenticated users can list cars for rent.
* **Listing Limit:** Smart restriction implementation allowing a **maximum of 5 cars** per user to prevent spam.
* **My Cars Dashboard:** Users can view a personalized list of the cars they have added.
* **Delete Functionality:** Users have full control to remove their listings from the marketplace.

### 📞 Booking & Communication
* **Direct Contact:** Renters can view contact details (Phone/Email) to directly reach out to the car owner.
* **Secure Data:** Backend data is served securely via Node.js/Express with MongoDB.

### 🔐 Security
* **JWT Protection:** All sensitive API requests are secured using Firebase JWT tokens verification on the backend.

---

## 🧰 Tech Stack

### 🖥️ Frontend
* **Framework:** Next.js 16 (App Router)
* **Library:** React 19
* **Styling:** Tailwind CSS v4, DaisyUI 5, Styled Components
* **State/Data Management:** TanStack Query (React Query)
* **Forms:** React Hook Form
* **Animations:** Framer Motion, React Fast Marquee
* **Notifications:** React Hot Toast, SweetAlert2

### ⚙️ Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (NoSQL)
* **Security:** JWT (JSON Web Tokens), Firebase Admin SDK

---

## 🚀 Run Locally

Clone the project and install dependencies to run the frontend locally.


### 1. Clone the repository
```bash
git clone https://github.com/Mostafiz002/Car-Xpress-Frontend.git
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables
Create a .env.local file in the root directory and add your Firebase and Backend configuration:

Code snippet
```

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY= //
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN= //
NEXT_PUBLIC_FIREBASE_PROJECT_ID= //
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET= //
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID= //
NEXT_PUBLIC_FIREBASE_APP_ID= //
NEXT_PUBLIC_IMAGE_HOST_KEY= //

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Run the Development Server
```
Bash

npm run dev
Open http://localhost:3000 with your browser to see the result.
```
