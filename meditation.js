import React, { useState, useEffect, useRef } from 'react';
import './Meditation.css'; // Ensure this file contains the necessary styles

const Meditation = () => {
    const [formData, setFormData] = useState({
        rounds: 5,           // Default 5 rounds
        inhaleTime: 4,       // Default 4 seconds
        holdTime: 4,         // Default 4 seconds
        exhaleTime: 4        // Default 4 seconds
    });

    const [animationState, setAnimationState] = useState('idle'); // 'idle', 'inhale', 'hold', 'exhale'
    const [isMeditating, setIsMeditating] = useState(false);
    const [phaseTime, setPhaseTime] = useState(0); // Time in the current phase
    const [totalTime, setTotalTime] = useState(0); // Total time elapsed
    const timerRef = useRef(null);

    useEffect(() => {
        if (isMeditating) {
            const { inhaleTime, holdTime, exhaleTime } = formData;
            const cycleTime = inhaleTime + holdTime + exhaleTime;

            setPhaseTime(0);
            setTotalTime(0);

            timerRef.current = setInterval(() => {
                setPhaseTime(prev => {
                    const nextPhaseTime = prev + 1;
                    const elapsedTime = nextPhaseTime % cycleTime;

                    if (elapsedTime === 0 && nextPhaseTime > 0) {
                        // After a full cycle, restart phases
                        setTotalTime(prev => prev + cycleTime);
                    }

                    const newAnimationState =
                        elapsedTime < formData.inhaleTime
                            ? 'inhale'
                            : elapsedTime < formData.inhaleTime + formData.holdTime
                                ? 'hold'
                                : 'exhale';

                    setAnimationState(newAnimationState);
                    setTotalTime(prev => prev + 1);
                    return nextPhaseTime;
                });
            }, 1000);
        }

        return () => clearInterval(timerRef.current);
    }, [isMeditating, formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: parseInt(value, 10) });
    };

    const startMeditation = () => {
        setIsMeditating(true);
    };

    const formatTime = (time) => {
        return `${Math.floor(time / 60)}:${('0' + (time % 60)).slice(-2)}`;
    };

    return (
        <div className="meditation-wrapper">
            <div className="meditation-content">
                {!isMeditating ? (
                    <>
                        <h2>Meditation Zone 🧘‍♂️</h2>
                        <p>Customize your meditation experience:</p>
                        <form>
                            <div className="form-group">
                                <label htmlFor="rounds">Number of Rounds:</label>
                                <input
                                    type="number"
                                    id="rounds"
                                    name="rounds"
                                    value={formData.rounds}
                                    onChange={handleInputChange}
                                    min="1"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inhaleTime">Inhale Time (seconds):</label>
                                <input
                                    type="number"
                                    id="inhaleTime"
                                    name="inhaleTime"
                                    value={formData.inhaleTime}
                                    onChange={handleInputChange}
                                    min="1"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="holdTime">Hold Time (seconds):</label>
                                <input
                                    type="number"
                                    id="holdTime"
                                    name="holdTime"
                                    value={formData.holdTime}
                                    onChange={handleInputChange}
                                    min="0"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exhaleTime">Exhale Time (seconds):</label>
                                <input
                                    type="number"
                                    id="exhaleTime"
                                    name="exhaleTime"
                                    value={formData.exhaleTime}
                                    onChange={handleInputChange}
                                    min="1"
                                />
                            </div>
                            <button type="button" onClick={startMeditation}>
                                Start Meditation
                            </button>
                        </form>
                    </>
                ) : (
                    <div>
                        <h2>Meditation In Progress...</h2>
                        <div className="animation">
                            <div className={`breathing-ball ${animationState}`}></div>
                        </div>
                        <div className="instructions">
                            {animationState === 'inhale' && <p>Inhale... 🌬️</p>}
                            {animationState === 'hold' && <p>Hold your breath... ⏸️</p>}
                            {animationState === 'exhale' && <p>Exhale... 🌬️</p>}
                        </div>
                        <div className="timer">
                            <p>Time Elapsed: {formatTime(totalTime)}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Meditation;
