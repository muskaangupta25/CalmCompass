import React from 'react';
import './home.css'; // Import specific styles for Home component

function Home() {
    return (
        <div className="home-container">
            <img src="/images/calm.png" alt="CalmCompass Logo" className="logoimage"/>
            <h1>Welcome to Calm Compass!</h1>
            <p className="intro-text">
                Calm Compass is designed to support your mental well-being through tracking your mood, providing positive
                affirmations, and offering guided meditation sessions.
            </p>
            <div className="features">
                <h2>Features:</h2>
                <ul>
                    <li><strong>Mood Tracker:</strong> Keep track of your mood on a daily basis and get insights into
                        your emotional patterns.
                    </li>
                    <li><strong>Affirmations:</strong> Receive daily positive affirmations to uplift your spirits.</li>
                    <li><strong>Meditation:</strong> Access guided meditation sessions to help you relax and stay
                        mindful.
                    </li>
                    <li><strong>Self-Assessment:</strong> Evaluate your mental state with quizzes to better understand
                        your
                        well-being.
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Home;
