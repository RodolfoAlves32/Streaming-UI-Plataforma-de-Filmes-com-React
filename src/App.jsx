import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

// Pages placeholders
import Landing from './pages/Landing/Landing';
import Login from './pages/Login/Login';
import Plans from './pages/Plans/Plans';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import MyList from './pages/MyList/MyList';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/plans" element={<Plans />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/mylist" element={<MyList />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
