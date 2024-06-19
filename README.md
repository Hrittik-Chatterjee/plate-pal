# PlatePal

PlatePal is a web application that allows users to discover, create, and share recipes. Built with React, MongoDB, and Express.js, PlatePal provides a platform for exploring a wide variety of recipes, creating new recipes, and engaging with a community of food enthusiasts.

## Features

- **Recipe Discovery**: Explore a vast collection of recipes across different categories.
- **Recipe Creation**: Create and publish your own recipes with detailed ingredients, instructions, and images.
- **Rating System**: Rate recipes and provide feedback to contribute to the community's recipe quality.
- **User Authentication**: Secure user authentication using Firebase Authentication and JWT tokens.
- **Responsive UI**: Utilizes Tailwind CSS with Daisy UI components for a clean and responsive user interface.
- **Charts and Visuals**: Display recipe analytics using Recharts for data visualization.
- **Carousel and Sliders**: Showcase recipes dynamically using Swiper and React Responsive Carousel.

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces.
- **React Router DOM**: Declarative routing for React applications.
- **Tailwind CSS with Daisy UI**: Utility-first CSS framework with additional UI components.
- **React Icons, React Rating, React Spinners, React Tabs, React Toastify**: Enhance UI with icons, ratings, spinners, tabs, and toast notifications.
- **Recharts**: Charting library for displaying recipe analytics.
- **Swiper, React Responsive Carousel**: Libraries for creating carousels and sliders.

### Backend

- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing recipe data.
- **Firebase Authentication**: Secure authentication methods including JWT tokens.

## JWT Token Authentication

PlatePal uses JWT tokens for secure user authentication. JWT tokens are generated upon successful user login and are included in subsequent requests to authenticate API calls. Here’s how JWT token authentication works in PlatePal:

1. **User Login**: When a user successfully logs in with valid credentials, the server generates a JWT token containing the user's information and a secret key.
2. **Token Storage**: The JWT token is stored in the client-side localStorage to persist the user's authentication state across browser sessions.

3. **Token Expiration**: JWT tokens have an expiration time (defined by the server) to ensure security. After expiration, the user must re-authenticate to obtain a new token.

4. **Authorization**: Each request to the backend API includes the JWT token in the Authorization header (`Bearer token`) to authenticate the user and authorize access to protected resources (like creating or editing recipes).

5. **Logout**: When the user logs out, the JWT token stored on the client-side is invalidated or deleted, ensuring that subsequent requests are not authenticated.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed on your local machine.
- MongoDB installed locally or using a cloud service (e.g., MongoDB Atlas).
- Firebase project set up for authentication (optional for local development).

### Installation

1. Clone the repo:

   ```sh
   git clone https://github.com/Hrittik-Chatterjee/plate-pal.git
   cd platepal
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory based on `.env.example`.
   - Configure variables for MongoDB connection URI, Firebase credentials (if applicable), and other settings.

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## Backend server git repo Link

-https://github.com/Hrittik-Chatterjee/plate-pal-server
