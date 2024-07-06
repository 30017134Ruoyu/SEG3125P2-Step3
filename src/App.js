import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlanningTripPage from './components/PlanningTripPage';
import PracticalInfoPage from './components/PracticalInfoPage';
import TouristAttractionsPage from './components/TouristAttractionsPage';
import FoodRecommendationsPage from './components/FoodRecommendationsPage';
import CreateTravelLogPage from './components/CreateTravelLogPage';
import CommunicationPage from './components/CommunicationPage';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planning-trip" element={<PlanningTripPage />} />
        <Route path="/practical-info" element={<PracticalInfoPage />} />
        <Route path="/tourist-attractions" element={<TouristAttractionsPage />} />
        <Route path="/food-recommendations" element={<FoodRecommendationsPage />} />
        <Route path="/create-travel-log" element={<CreateTravelLogPage />} />
        <Route path="/communication" element={<CommunicationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
