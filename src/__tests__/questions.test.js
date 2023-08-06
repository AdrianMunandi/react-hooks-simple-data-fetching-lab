import React, { useState, useEffect } from 'react';

const Question = ({ question, onAnswered }) => {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      // Reset timeRemaining to 10 seconds for the next question
      setTimeRemaining(10);
      // Call the onAnswered callback with a value of false to trigger behavior in the App component
      onAnswered(false);
    }

    const timer = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup function for useEffect to clear the timer when the component unmounts or timeRemaining hits 0
    return () => clearTimeout(timer);
  }, [timeRemaining, onAnswered]); // Include timeRemaining and onAnswered as dependencies

  return (
    <div>
      <p>{question}</p>
      <p>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
};

export default Question;
