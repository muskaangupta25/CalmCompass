import React from 'react';

function MoodSummary() {
    const moodHistory = JSON.parse(localStorage.getItem('moodHistory')) || [];

    return (
        <div className="section">
            <h2>Your Mood Summary</h2>
            <ul>
                {moodHistory.map((mood, index) => (
                    <li key={index}>{mood}</li>
                ))}
            </ul>
        </div>
    );
}

export default MoodSummary;
