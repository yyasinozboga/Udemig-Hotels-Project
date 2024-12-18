# Udemig Full Stack Hotels Project

This project is a user-friendly **hotel filtering, adding, and deleting web application** built with a **MongoDB**-based backend and **TanStack Query** for state management on the frontend. The application is fully responsive and works seamlessly on all screen sizes.

## General Features

- **MongoDB**: Hotel data is stored in MongoDB. A flexible data model is used to manage hotel details (name, price, location, rating, etc.).
- **Express.js**: Backend framework that handles API requests.
- **CRUD Operations**:
  - **Create**: Endpoints for adding new hotels.
  - **Read**: Endpoints for fetching hotel lists and details.
  - **Delete**: Endpoints for deleting hotels.

## Frontend

- **React and TanStack Query**:
  - **Data Management**: Hotel data is cached using TanStack Query for a faster user experience.
  - **Reactive Structure**: Updates from the API are immediately reflected to the user.
- **TypeScript**: Ensures a more reliable and scalable development environment.
- **Tailwind CSS**: Provides a sleek and minimal design that adapts to all screen sizes.

## User-Friendly Features

- **Filtering and Sorting**:
  - Users can filter hotels by name, location, rating, or price range.
  - Sorting options include:
    - **Price**: From high to low, or low to high.
    - **Rating**: From high to low, or low to high.
- **Adding and Deleting**:
  - Simple and intuitive interface for adding new hotels or removing existing ones.
- **Responsive Design**:
  - The application provides a seamless experience across all devices (mobile, tablet, desktop).

## Technical Details

- **Hot Reloading**: Enables quick updates during development.\n
- **Performance Optimization**:
  - Minimal latency achieved through API calls with TanStack Query.
  - Lazy-loading ensures only the required data is loaded as needed.
- **Error Handling**: User-friendly feedback mechanisms for failed API requests.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/username/hotel-application.git

   cd backend
   npm install

   cd ../frontend
   npm install

   cd backend
   npm start

   cd frontend
   npm start
   ```

   ## Preview

   <img src="./frontend/public/udemig-hotels-project-gif.gif">
