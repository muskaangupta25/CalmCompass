import React, { useState } from 'react';
import './Quiz.css';

const AdhdQuiz = () => {
    const [responses, setResponses] = useState(Array(6).fill(0)); // Adjust the number of questions
    const [result, setResult] = useState(null);
    const [adhdLevel, setAdhdLevel] = useState('');

    const handleSliderChange = (index, value) => {
        const newResponses = [...responses];
        newResponses[index] = value;
        setResponses(newResponses);
    };

    const calculateResult = () => {
        const totalScore = responses.reduce((a, b) => a + b, 0);
        const average = totalScore / responses.length;

        if (average <= 1.5) {
            setAdhdLevel('Low');
            return {
                message: "Your symptoms are minimal. 🎉 Keep an eye on your focus and restlessness.",
                suggestion: "Maintain a balanced routine and consider mindfulness practices.",
                resources: [
                    { link: 'https://www.additudemag.com/', text: 'ADDitude Magazine' },
                    { link: 'https://chadd.org/', text: 'CHADD' }
                ]
            };
        } else if (average <= 3) {
            setAdhdLevel('Moderate');
            return {
                message: "You may experience some challenges with focus and restlessness. ⚠️",
                suggestion: "Consider talking to a professional for personalized strategies.",
                resources: [
                    { link: 'https://www.additudemag.com/', text: 'ADDitude Magazine' },
                    { link: 'https://www.cdc.gov/ncbddd/adhd/resources.html', text: 'CDC ADHD Resources' }
                ]
            };
        } else {
            setAdhdLevel('High');
            return {
                message: "It's important to address these symptoms with professional guidance. 🩺",
                suggestion: "Consult with a healthcare provider for tailored support.",
                resources: [
                    { link: 'https://www.nichd.nih.gov/health/topics/adhd/conditioninfo/treatment', text: 'NIH ADHD Treatment' },
                    { link: 'https://www.adhdcoachacademy.com/', text: 'ADHD Coach Academy' }
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
                <h2>ADHD Self-Report Quiz 🚀</h2>
                <form onSubmit={handleSubmit}>
                    {[
                        "I have trouble keeping my attention on tasks.",
                        "I often feel restless.",
                        "I frequently interrupt others.",
                        "I have difficulty organizing tasks.",
                        "I struggle with completing tasks on time.",
                        "I find it hard to stay still."
                    ].map((question, index) => (
                        <div className="question" key={index}>
                            <p>{question}</p>
                            <div className="slider-container">
                                <input
                                    type="range"
                                    min="0"
                                    max="5"
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
                    <h3>Your ADHD Level: {adhdLevel}</h3>
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

export default AdhdQuiz;
