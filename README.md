# Netflix Clone

## 🚀 About the Project
The Netflix Clone is a web application built with ReactJS that replicates the core functionality and design of Netflix. It allows users to browse movies and TV shows dynamically fetched from the TMDb API. The app features a modern UI, dynamic routing, and responsive design, providing an engaging experience for users.

Key Features:
- Dynamic Movie Lists: Fetches and displays movies dynamically from the TMDb API.
- Movie Details Page: View detailed information about a selected movie, including its overview, release date, rating, and genres.
- Responsive Design: Fully optimized for both desktop and mobile devices.
- Dynamic Routing: Uses React Router to navigate between pages seamlessly.
- API Integration: Fetches real-time data from the TMDb API for movies and TV shows.

The Netflix Clone is a great project to showcase the power of ReactJS, offering developers an opportunity to learn about API integration, dynamic routing, and responsive design.

---

## 🖼 Screenshots
<p>
  <img src="/src/assets/img/NetflixClone1.png"> 
  <img src="/src/assets/img/NetflixClone2.png">
  <img src="/src/assets/img/NetflixClone3.png">
</p>

### Access the Netflix Clone at: https://react-netflix-clone-dlci.vercel.app/dashboard

---

## 🛠 Technologies Used
- Language: JavaScript (ES6+)
- Framework: ReactJS
- State Management: React Hooks (useState, useEffect)
- Routing: React Router v6
- Styling: SCSS
- API: TMDb API for fetching dynamic movie data
- Compatibility: Desktop & Mobile
---

## 📋 Requirements
- Node.js v14+
- Package Manager: npm or yarn
- Recommended Editor: VS Code
- API Key: A valid API key from TMDb.

---

## 📥 Installing or Cloning the Repository
To install and run the project locally, follow these steps:

### Clone the Repository

```
git clone https://github.com/your-username/Netflix-Clone.git
```

### Navigate to the project folder

```
cd Netflix-Clone
```

### Install dependencies

```
npm install  # or yarn install
```

### Start the application

```
npm start  # or yarn start
```

The app will be available at http://localhost:3000/.

---

## 🎯 Learning Objectives
- API Integration: The app integrates with the TMDb API to fetch movie data dynamically. For example, the following code fetches a list of popular movies:
```
const fetchMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY&language=en-US&page=1`
  );
  const data = await response.json();
  setMovies(data.results);
};
useEffect(() => {
  fetchMovies();
}, []);
```
- Dynamic Routing: React Router is used to navigate between pages. For example, clicking on a movie redirects to a details page using dynamic routing:
```
import { useNavigate } from "react-router-dom";

const handleClick = (id) => {
  navigate(`/movie/${id}`);
};

return (
  <img
    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
    alt={movie.title}
    onClick={() => handleClick(movie.id)}
  />
);
```
- State Management: React Hooks (useState, useEffect) are used to manage and fetch data efficiently.
- Componentization: The app is built with reusable components such as List, Banner, and MovieDetails for better code organization.
- Responsive Design: The app is fully responsive, ensuring a seamless experience across devices.
- Performance Optimization: Lazy loading and efficient API calls are implemented to improve performance.
