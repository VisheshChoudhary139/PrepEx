import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Practice extends Component {
  static propTypes = {
    onNavigate: PropTypes.func, // For navigation (if needed)
  };

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1, // Current page number
      answers: {}, // Store user answers
    };
  }

  // Questions grouped by sections
  questions = [
    // English Questions
    {
      section: 'English',
      questions: [
        {
          id: 1,
          text: 'Choose the correct synonym for the word "Eloquent":',
          options: ['Fluent', 'Silent', 'Rude', 'Harsh'],
        },
        {
          id: 2,
          text: 'Identify the grammatical error in the following sentence:',
          code: '"She don\'t like apples."',
          options: ['Subject-verb agreement', 'Punctuation', 'Tense', 'No error'],
        },
      ],
    },
    // Aptitude Questions
    {
      section: 'Aptitude',
      questions: [
        {
          id: 3,
          text: 'If 2x + 5 = 15, what is the value of x?',
          options: ['5', '10', '7.5', '8'],
        },
        {
          id: 4,
          text: 'What is 20% of 150?',
          options: ['30', '15', '20', '25'],
        },
      ],
    },
    // Reasoning Questions
    {
      section: 'Reasoning',
      questions: [
        {
          id: 5,
          text: 'Find the next number in the series: 2, 4, 8, 16, ___',
          options: ['32', '24', '18', '20'],
        },
        {
          id: 6,
          text: 'If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?',
          options: ['Yes', 'No', 'Maybe', 'Cannot be determined'],
        },
      ],
    },
    // Programming Questions
    {
      section: 'Programming',
      questions: [
        {
          id: 7,
          text: 'Write a function in JavaScript to reverse a string.',
          options: ['Yes', 'No', 'Maybe', 'Not sure'],
        },
        {
          id: 8,
          text: 'What will be the output of the following code?',
          code: `
            let x = 5;
            let y = x++;
            console.log(y);
          `,
          options: ['5', '6', 'undefined', 'Error'],
        },
      ],
    },
  ];

  // Flatten all questions into a single array
  allQuestions = this.questions.flatMap((section) => section.questions);

  // Number of questions per page
  questionsPerPage = 2;

  // Handle next button click
  handleNext = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  // Handle back button click
  handleBack = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1,
    }));
  };

  // Handle answer selection
  handleAnswerChange = (questionId, selectedOption) => {
    this.setState((prevState) => ({
      answers: {
        ...prevState.answers,
        [questionId]: selectedOption,
      },
    }));
  };

  // Handle submit button click
  handleSubmit = () => {
    alert('Submitted! Answers: ' + JSON.stringify(this.state.answers, null, 2)); // Replace with actual submission logic
  };

  render() {
    const { currentPage, answers } = this.state;

    // Calculate the range of questions to display
    const startIndex = (currentPage - 1) * this.questionsPerPage;
    const endIndex = startIndex + this.questionsPerPage;
    const currentQuestions = this.allQuestions.slice(startIndex, endIndex);

    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Practice Question Paper</h1>

        {/* Display current questions */}
        {currentQuestions.map((question) => (
          <div key={question.id} style={styles.question}>
            <p>
              <strong>Q{question.id}.</strong> {question.text}
            </p>
            {question.code && (
              <pre style={styles.code}>
                <code>{question.code}</code>
              </pre>
            )}
            {question.options && (
              <div style={styles.options}>
                {question.options.map((option, index) => (
                  <label key={index} style={styles.option}>
                    <input
                      type="radio"
                      name={`question-${question.id}`}
                      value={option}
                      checked={answers[question.id] === option}
                      onChange={() => this.handleAnswerChange(question.id, option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Navigation buttons */}
        <div style={styles.navigation}>
          {currentPage > 1 && (
            <button style={styles.button} onClick={this.handleBack}>
              Back
            </button>
          )}
          {currentPage < this.allQuestions.length / this.questionsPerPage && (
            <button style={styles.button} onClick={this.handleNext}>
              Next
            </button>
          )}
          {currentPage === this.allQuestions.length / this.questionsPerPage && (
            <button style={styles.submitButton} onClick={this.handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
  },
  question: {
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  code: {
    backgroundColor: '#eee',
    padding: '10px',
    borderRadius: '5px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
  },
  options: {
    marginTop: '10px',
  },
  option: {
    display: 'block',
    margin: '5px 0',
  },
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: 'orange', // Orange color for submit button
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Practice;