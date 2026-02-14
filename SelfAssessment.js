// SelfAssessment.js
import React from 'react';
import { Link } from 'react-router-dom';
import './SelfAssessment.css'; // Add your CSS file

function SelfAssessment() {
    return (
        <div className="self-assessment">
            <h2>Self Assessment</h2>
            <p>Welcome to the Self Assessment section. Choose a quiz to evaluate your mental health:</p>
            <div className="quiz-buttons">
                <Link to="/self-assessment/depression" className="quiz-button">Depression Quiz</Link>
                <Link to="/self-assessment/anxiety" className="quiz-button">Anxiety Quiz</Link>
                <Link to="/self-assessment/adhd" className="quiz-button">ADHD Quiz</Link>
            </div>
        </div>
    );
}

export default SelfAssessment;
