import React, { useState } from 'react';
import './Quiz.css';

const AnxietyQuiz = () => {
    const [responses, setResponses] = useState(Array(10).fill(0));
    const [result, setResult] = useState(null);
    const [anxietyLevel, setAnxietyLevel] = useState('');

    const handleSliderChange = (index, value) => {
        const newResponses = [...responses];
        newResponses[index] = value;
        setResponses(newResponses);
    };

    const calculateResult = () => {
        const totalScore = responses.reduce((a, b) => a + b, 0);
        const average = totalScore / responses.length;

        if (average <= 1.5) {
            setAnxietyLevel('Low');
            return {
                message: "You're as cool as a cucumber! 🥒 Keep that chill vibe going.",
                suggestion: "Maintain that inner peace with mindful practices!",
                resources: [
                    { link: 'https://www.headspace.com/', text: 'Headspace App' },
                    { link: 'https://www.mindful.org/', text: 'Mindful Exercises' }
                ]
            };
        } else if (average <= 3) {
            setAnxietyLevel('Moderate');
            return {
                message: "Feeling a bit on edge? 🧘‍♀️ Let's take a deep breath.",
                suggestion: "Try some relaxation techniques, or chat with someone close.",
                resources: [
                    { link: 'https://www.breathwrk.com/', text: 'Breathwrk App' },
                    { link: 'https://www.calm.com/', text: 'Calm App' }
                ]
            };
        } else {
            setAnxietyLevel('High');
            return {
                message: "Anxiety overload? 😬 Let's take some time to care for yourself.",
                suggestion: "Seeking professional help could be a good next step.",
                resources: [
                    { link: 'https://www.betterhelp.com/', text: 'BetterHelp Counseling' },
                    { link: 'https://www.mhanational.org/', text: 'Mental Health America' }
                ]
            };
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const quizResult = calculateResult();
        setResult(quizResult);

        // Ensure result is displayed before scrolling
        setTimeout(() => {
            document.querySelector('.quiz-result').scrollIntoView({ behavior: 'smooth' });
        }, 100); // Adjust timeout if needed
    };

    return (
        <div className="quiz-wrapper">
            <div className="quiz-form">
                <h2>Anxiety Quiz 🧘‍♀️</h2>
                <form onSubmit={handleSubmit}>
                    {[
                        "Feeling a little tense lately? 😟",
                        "Worrying about everything? 🤔",
                        "Heart racing more often than usual? 💓",
                        "Restlessness kicking in? 🦶",
                        "Sleep feels like a rare gem? 😴",
                        "Muscles tensing up? 💪",
                        "Feeling easily irritated? 😤",
                        "Difficulty concentrating? 🧠",
                        "Getting panic attacks? 😱",
                        "Feeling detached from reality? 🌌"
                    ].map((question, index) => (
                        <div className="question" key={index}>
                            <p>{question}</p>
                            <div className="slider-container">
                                <input
                                    type="range"
                                    min="0"
                                    max="4"
                                    value={responses[index]}
                                    onChange={(e) => handleSliderChange(index, e.target.value)}
                                />
                                <div className="slider-labels">
                                    <span>Not at all</span>
                                    <span>Extremely</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button type="submit">Submit 🚀</button>
                </form>
            </div>
            {result && (
                <div className="quiz-result">
                    <h3>Your Anxiety Level: {anxietyLevel}</h3>
                    <p>{result.message}</p>
                    <p>Suggestion: {result.suggestion}</p>
                    <p>Resources:</p>
                    <ul>
                        {result.resources.map((resource, index) => (
                            <li key={index}>
                                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                                    {resource.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AnxietyQuiz;
