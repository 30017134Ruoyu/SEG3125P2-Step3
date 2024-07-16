import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlanningTripPage from './components/PlanningTripPage';
import PracticalInfoPage from './components/PracticalInfoPage';
import TouristAttractionsPage from './components/TouristAttractionsPage';
import FoodRecommendationsPage from './components/FoodRecommendationsPage';
import CreateTravelLogPage from './components/CreateTravelLogPage';
import CommunicationPage from './components/CommunicationPage';
import Faq from './components/Faq';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthProvider } from './components/AuthContext';


function App() {
  return (
    <AuthProvider>
      <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/planning-trip" element={<PlanningTripPage />} />
        <Route path="/practical-info" element={<PracticalInfoPage />} />
        <Route path="/tourist-attractions" element={<TouristAttractionsPage />} />
        <Route path="/food-recommendations" element={<FoodRecommendationsPage />} />
        <Route path="/create-travel-log" element={<CreateTravelLogPage />} />
        <Route path="/communication" element={<CommunicationPage />} />
      </Routes>
    </Router>

    </AuthProvider>
    
  );
}

export default App;
