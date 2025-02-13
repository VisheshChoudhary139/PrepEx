import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class English extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      level: 'easy', // Default level
      currentQuestionIndex: 0, // Track current question
      questions: {
        easy: [
          {
            question: 'Choose the correct synonym for "Happy":',
            options: ['Sad', 'Joyful', 'Angry', 'Tired'],
            answer: 'Joyful',
          },
          {
            question: 'What is the plural form of "Child"?',
            options: ['Childs', 'Children', 'Childes', 'Childies'],
            answer: 'Children',
          },
        ],
        medium: [
          {
            question: 'Identify the correct sentence:',
            options: [
              'She don’t like apples.',
              'She doesn’t likes apples.',
              'She doesn’t like apples.',
              'She don’t likes apples.',
            ],
            answer: 'She doesn’t like apples.',
          },
          {
            question: 'What is the past tense of "Run"?',
            options: ['Ran', 'Running', 'Runned', 'Runs'],
            answer: 'Ran',
          },
        ],
        hard: [
          {
            question: 'Choose the correct antonym for "Benevolent":',
            options: ['Kind', 'Generous', 'Malevolent', 'Friendly'],
            answer: 'Malevolent',
          },
          {
            question: 'Which sentence is in the passive voice?',
            options: [
              'The cat chased the mouse.',
              'The mouse was chased by the cat.',
              'The cat is chasing the mouse.',
              'The mouse chased the cat.',
            ],
            answer: 'The mouse was chased by the cat.',
          },
        ],
      },
    };
  }

  handleLevelChange = (event) => {
    this.setState({ level: event.target.value, currentQuestionIndex: 0 });
  };

  goToNextQuestion = () => {
    this.setState((prevState) => ({
      currentQuestionIndex: (prevState.currentQuestionIndex + 1) % this.state.questions[this.state.level].length,
    }));
  };

  goToPreviousQuestion = () => {
    this.setState((prevState) => ({
      currentQuestionIndex:
        (prevState.currentQuestionIndex - 1 + this.state.questions[this.state.level].length) %
        this.state.questions[this.state.level].length,
    }));
  };

  render() {
    const { level, currentQuestionIndex, questions } = this.state;
    const currentQuestion = questions[level][currentQuestionIndex];

    return (
      <div style={{ backgroundColor: '#F5F5F5', minHeight: '100vh', padding: '20px' }}>
        {/* Level Selection Dropdown */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#C06500', fontWeight: 'bold', marginRight: '10px' }}>Select Level:</label>
          <select
            value={level}
            onChange={this.handleLevelChange}
            style={{
              padding: '5px 10px',
              borderRadius: '5px',
              border: '1px solid #C06500',
              backgroundColor: '#FFFFFF',
              color: '#C06500',
            }}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Question Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '15px',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            maxWidth: '600px',
            margin: '0 auto',
          }}
        >
          <h3 style={{ color: '#C06500', fontWeight: 'bold', marginBottom: '20px' }}>
            Question {currentQuestionIndex + 1}
          </h3>
          <p style={{ color: '#666666', fontSize: '1.1rem', marginBottom: '20px' }}>{currentQuestion.question}</p>

          {/* Options */}
          <div style={{ marginBottom: '20px' }}>
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#F5F5F5',
                  padding: '10px',
                  borderRadius: '5px',
                  marginBottom: '10px',
                  color: '#666666',
                }}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              onClick={this.goToPreviousQuestion}
              style={{
                backgroundColor: '#C06500',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Previous
            </button>
            <button
              onClick={this.goToNextQuestion}
              style={{
                backgroundColor: '#C06500',
                color: '#FFFFFF',
                padding: '10px 20px',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default English;