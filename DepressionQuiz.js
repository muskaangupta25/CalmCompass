import React, { useState } from 'react';
import './Quiz.css';

const DepressionQuiz = () => {
    const [responses, setResponses] = useState(Array(10).fill(0));
    const [result, setResult] = useState(null);
    const [depressionLevel, setDepressionLevel] = useState('');

    const handleSliderChange = (index, value) => {
        const newResponses = [...responses];
        newResponses[index] = value;
        setResponses(newResponses);
    };

    const calculateResult = () => {
        const totalScore = responses.reduce((a, b) => a + b, 0);
        const average = totalScore / responses.length;

        if (average <= 1.5) {
            setDepressionLevel('Low');
            return {
                message: "You're doing great! 🌟 No sign of heavy clouds in your mental skies.",
                suggestion: "Keep up the positive vibes and self-care routines!",
                resources: [
                    { link: 'https://www.mindful.org/', text: 'Mindfulness Exercises' },
                    { link: 'https://www.headspace.com/', text: 'Headspace App' }
                ]
            };
        } else if (average <= 3) {
            setDepressionLevel('Moderate');
            return {
                message: "Things might be feeling a bit cloudy 🌧, but there's always sunshine after the rain.",
                suggestion: "Consider talking to a friend, therapist, or journaling your feelings.",
                resources: [
                    { link: 'https://www.betterhelp.com/', text: 'BetterHelp Counseling' },
                    { link: 'https://www.7cups.com/', text: '7 Cups of Tea' }
                ]
            };
        } else {
            setDepressionLevel('High');
            return {
                message: "It’s okay to not be okay. ❤️ Let’s focus on self-care and finding the right help.",
                suggestion: "Talk to a healthcare professional, they can guide you to feeling better.",
                resources: [
                    { link: 'https://www.mentalhealth.gov/', text: 'Mental Health Support' },
                    { link: 'https://suicidepreventionlifeline.org/', text: 'Suicide Prevention Lifeline' }
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
                <h2>Depression Quiz 🧠</h2>
                <form onSubmit={handleSubmit}>
                    {[
                        "Feeling a bit down lately? 🥲",
                        "Discouragement knocking on your door? 😞",
                        "Is joy feeling a bit distant? 🎈",
                        "How's your self-esteem holding up? 🌱",
                        "Carrying any unnecessary guilt? 😕",
                        "Energy levels feeling like a Monday morning? 😴",
                        "Sleep all over the place? 💤",
                        "Any changes in appetite lately? 🍽️",
                        "Finding it hard to focus? 📚",
                        "Dark thoughts creeping in? 🌑"
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
                    <h3>Your Depression Level: {depressionLevel}</h3>
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

export default DepressionQuiz;
