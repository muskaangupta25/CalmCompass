import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import MoodTracker from './components/MoodTracker';
import Affirmations from './components/affirmations';
import Meditation from './components/meditation';
import MoodSummary from './components/MoodSummary';
import Login from './components/login';
import './App.css';
import Footer from "./components/Footer";
import SelfAssessment from "./components/SelfAssessment";
import DepressionQuiz from "./components/DepressionQuiz";
import AnxietyQuiz from "./components/AnxietyQuiz";
import AdhdQuiz from "./components/ADHDQuiz"; // Import your styles


function ADHDQuiz() {
    return null;
}

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <Router>
            <div className="App">
                {!isLoggedIn ? (
                    <Login onLogin={handleLogin} />
                ) : (
                    <>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/mood-tracker" element={<MoodTracker />} />
                            <Route path="/affirmations" element={<Affirmations />} />
                            <Route path="/meditation" element={<Meditation />} />
                            <Route path="/mood-summary" element={<MoodSummary />} />
                            <Route path="/self-assessment" element={<SelfAssessment />} />
                            <Route path="/self-assessment/depression" element={<DepressionQuiz />} />
                            <Route path="/self-assessment/anxiety" element={<AnxietyQuiz />} />
                            <Route path="/self-assessment/adhd" element={<AdhdQuiz />} />

                        </Routes>
                    </>
                )}
                <Footer /> {/* Add Footer component */}
            </div>
        </Router>
    );
}

export default App;
