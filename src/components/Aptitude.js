import React, { Component } from 'react';

export class Aptitude extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      level: 'easy', // Default level
      currentQuestionIndex: 0, // Track current question
      questions: {
        easy: [
          {
            question: 'What is 15% of 200?',
            options: ['20', '30', '40', '50'],
            answer: '30',
          },
          {
            question: 'If the price of a book is increased by 10%, what is the new price if the original price was $50?',
            options: ['$55', '$60', '$65', '$70'],
            answer: '$55',
          },
        ],
        medium: [
          {
            question: 'A train travels 300 km in 5 hours. What is its speed?',
            options: ['50 km/h', '60 km/h', '70 km/h', '80 km/h'],
            answer: '60 km/h',
          },
          {
            question: 'What is the next number in the series: 2, 4, 8, 16, ___?',
            options: ['24', '32', '64', '128'],
            answer: '32',
          },
        ],
        hard: [
          {
            question: 'If 2x + 5 = 15, what is the value of x?',
            options: ['5', '10', '15', '20'],
            answer: '5',
          },
          {
            question: 'What is the area of a circle with a radius of 7 cm? (Use π = 22/7)',
            options: ['154 cm²', '160 cm²', '170 cm²', '180 cm²'],
            answer: '154 cm²',
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

export default Aptitude;