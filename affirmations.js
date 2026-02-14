import React, { useState } from 'react';
import './Affirmations.css'; // Import specific styles for Affirmations component

function Affirmations() {
    const [affirmations, setAffirmations] = useState([]);
    const [newAffirmation, setNewAffirmation] = useState('');

    const handleAddAffirmation = () => {
        if (newAffirmation.trim()) {
            setAffirmations([...affirmations, newAffirmation]);
            setNewAffirmation('');
        }
    };

    return (
        <div className="affirmations-container">
            <h1>Your Affirmations</h1>
            <div className="affirmations-form">
                <input
                    type="text"
                    value={newAffirmation}
                    onChange={(e) => setNewAffirmation(e.target.value)}
                    placeholder="Enter a new affirmation"
                />
                <button onClick={handleAddAffirmation}>Add Affirmation</button>
            </div>
            <div className="affirmations-list">
                {affirmations.length === 0 ? (
                    <p>No affirmations added yet.</p>
                ) : (
                    affirmations.map((affirmation, index) => (
                        <div key={index} className="affirmation-item">
                            {affirmation}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Affirmations;
