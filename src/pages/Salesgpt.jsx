import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Salesgpt = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const askQuestion = async () => {
    try {
      const res = await axios.post('http://127.0.0.1:5000/ask-question', {
        question: question, 
      });
      setResponse(res.data.response); 
    } catch (error) {
      console.error("Error fetching the response:", error);
      setResponse("There was an error retrieving the response.");
    }
  };

  const handleButtonClick = (text) => {
    setQuestion(text);
  };

  const suggestedTopics = [
    'Budget analysis overview',
    'Tax proposals summary',
    'Expenditure breakdown',
    'Disinvestment targets explained'
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-2 mb-8">
        <img
          src="/fixit_gray.svg"
          alt="FixIt Logo"
          className="w-8 h-8"
        />
        <h1 className="text-3xl font-semibold">fiXit</h1>
      </div>
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          placeholder="SalesGPT can help you to browse uncovered topics"
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          onClick={askQuestion}
          className="absolute right-2 top-[5px] bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
      {response && (
        <div className="mt-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-lg">
          <p className="text-lg text-gray-800">Response: {response}</p>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {suggestedTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleButtonClick(topic)}
            className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
          >
            {topic}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <button
          onClick={() => handleButtonClick('Focus on fiscal responsibility')}
          className="px-4 py-2 bg-blue-100 text-blue-500 rounded-full hover:bg-blue-200"
        >
          Focus on fiscal responsibility
        </button>
      </div>
    </div>
  );
};

export default Salesgpt;