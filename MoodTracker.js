import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import './MoodTracker.css'; // Import specific styles for MoodTracker component

// Register the components for Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

function MoodTracker() {
    const [mood, setMood] = useState(5); // Mood level from 0 to 10
    const [energy, setEnergy] = useState(5); // Energy level from 0 to 10
    const [stress, setStress] = useState(5); // Stress level from 0 to 10

    const getEmoji = (value, type) => {
        if (type === 'mood') {
            if (value <= 2) return "😭";
            if (value <= 4) return "😟";
            if (value <= 6) return "😐";
            if (value <= 8) return "😊";
            return "😁";
        } else if (type === 'energy') {
            if (value <= 2) return "💤";
            if (value <= 4) return "😴";
            if (value <= 6) return "😌";
            if (value <= 8) return "💪";
            return "🚀";
        } else {
            if (value <= 2) return "🔥";
            if (value <= 4) return "😵";
            if (value <= 6) return "😅";
            if (value <= 8) return "😎";
            return "🤩";
        }
    };

    const handleSubmit = () => {
        alert(`Today's Mood: ${getEmoji(mood, 'mood')}\nEnergy: ${getEmoji(energy, 'energy')}\nStress: ${getEmoji(stress, 'stress')}`);
    };

    const data = {
        labels: ['Mood', 'Energy', 'Stress'],
        datasets: [
            {
                label: 'Levels',
                data: [mood, energy, stress],
                backgroundColor: ['#7f5b9e', '#a47fb2', '#d6b6e1'],
                borderColor: ['#6e4a7f', '#9a6e8f', '#c4a0c4'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        return `${label}: ${value}`;
                    },
                },
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f0e8f0',
                },
            },
        },
    };

    return (
        <div className="mood-tracker-wrapper">
            <div className="mood-tracker-form">
                <h1>How's Your Day Going?</h1>
                <div className="mood-slider">
                    <label>How’s your mood today? {getEmoji(mood, 'mood')}</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={mood}
                        onChange={(e) => setMood(Number(e.target.value))}
                        className="slider"
                    />
                    <p>Feeling: {mood <= 2 ? 'Down in the dumps' : mood <= 4 ? 'A bit off' : mood <= 6 ? 'Meh, could be better' : mood <= 8 ? 'Pretty good' : 'On top of the world!'}</p>
                </div>
                <div className="mood-slider">
                    <label>How energetic are you? {getEmoji(energy, 'energy')}</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={energy}
                        onChange={(e) => setEnergy(Number(e.target.value))}
                        className="slider"
                    />
                    <p>{energy <= 2 ? 'I could use a nap' : energy <= 4 ? 'Running on empty' : energy <= 6 ? 'Feeling okay' : energy <= 8 ? 'Full of beans' : 'Ready to conquer the world!'}</p>
                </div>
                <div className="mood-slider">
                    <label>How stressed are you? {getEmoji(stress, 'stress')}</label>
                    <input
                        type="range"
                        min="0"
                        max="10"
                        value={stress}
                        onChange={(e) => setStress(Number(e.target.value))}
                        className="slider"
                    />
                    <p>{stress <= 2 ? 'Chilled out' : stress <= 4 ? 'A bit tense' : stress <= 6 ? 'Moderately stressed' : stress <= 8 ? 'Pretty stressed' : 'Stressed to the max!'}</p>
                </div>
                <button className="submit-button" onClick={handleSubmit}>Submit My Mood</button>
            </div>
            <div className="chart-container">
                <Bar data={data} options={options} />
            </div>
        </div>
    );
}

export default MoodTracker;
