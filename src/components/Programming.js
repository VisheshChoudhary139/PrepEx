import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Programming extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      language: 'c', // Default language
      level: 'easy', // Default level
      currentQuestionIndex: 0, // Track current question
      questions: {
        c: {
          easy: [
            {
              question: 'What is the output of `printf("%d", 10);` in C?',
              options: ['10', '0', 'Error', 'Undefined'],
              answer: '10',
            },
            {
              question: 'Which keyword is used to define a constant in C?',
              options: ['const', '#define', 'let', 'static'],
              answer: 'const',
            },
          ],
          medium: [
            {
              question: 'What is the size of an `int` in C on a 32-bit system?',
              options: ['2 bytes', '4 bytes', '8 bytes', 'Depends on the compiler'],
              answer: '4 bytes',
            },
            {
              question: 'What is the purpose of the `malloc` function in C?',
              options: [
                'To free memory',
                'To allocate memory',
                'To deallocate memory',
                'To initialize memory',
              ],
              answer: 'To allocate memory',
            },
          ],
          hard: [
            {
              question: 'What is the output of `printf("%d", sizeof("Hello"));` in C?',
              options: ['5', '6', '7', '8'],
              answer: '6',
            },
            {
              question: 'What is a dangling pointer in C?',
              options: [
                'A pointer that points to a deleted memory location',
                'A pointer that points to NULL',
                'A pointer that points to an uninitialized memory location',
                'A pointer that points to a valid memory location',
              ],
              answer: 'A pointer that points to a deleted memory location',
            },
          ],
        },
        cpp: {
          easy: [
            {
              question: 'What is the correct syntax to print "Hello, World!" in C++?',
              options: [
                'cout << "Hello, World!";',
                'print("Hello, World!");',
                'System.out.println("Hello, World!");',
                'console.log("Hello, World!");',
              ],
              answer: 'cout << "Hello, World!";',
            },
            {
              question: 'Which operator is used for dynamic memory allocation in C++?',
              options: ['new', 'malloc', 'alloc', 'create'],
              answer: 'new',
            },
          ],
          medium: [
            {
              question: 'What is the output of `cout << sizeof("Hello");` in C++?',
              options: ['5', '6', '7', '8'],
              answer: '6',
            },
            {
              question: 'What is the purpose of the `virtual` keyword in C++?',
              options: [
                'To create a virtual function',
                'To create a pure virtual function',
                'To allow function overriding',
                'All of the above',
              ],
              answer: 'All of the above',
            },
          ],
          hard: [
            {
              question: 'What is the output of `cout << typeid(5.5).name();` in C++?',
              options: ['int', 'float', 'double', 'char'],
              answer: 'double',
            },
            {
              question: 'What is the use of the `std::move` function in C++?',
              options: [
                'To move resources from one object to another',
                'To copy resources from one object to another',
                'To delete resources',
                'To allocate resources',
              ],
              answer: 'To move resources from one object to another',
            },
          ],
        },
        python: {
          easy: [
            {
              question: 'What is the output of `print(type(5))` in Python?',
              options: ['int', 'float', 'str', 'bool'],
              answer: 'int',
            },
            {
              question: 'Which keyword is used to define a function in Python?',
              options: ['def', 'function', 'func', 'define'],
              answer: 'def',
            },
          ],
          medium: [
            {
              question: 'What is the output of `print("Hello, World!"[1:5])` in Python?',
              options: ['Hello', 'ello', 'Hell', 'ello,'],
              answer: 'ello',
            },
            {
              question: 'What is the purpose of the `__init__` method in Python?',
              options: [
                'To initialize an object',
                'To delete an object',
                'To create a class',
                'To define a function',
              ],
              answer: 'To initialize an object',
            },
          ],
          hard: [
            {
              question: 'What is the output of `print([x**2 for x in range(5)])` in Python?',
              options: ['[0, 1, 4, 9, 16]', '[1, 4, 9, 16, 25]', '[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]'],
              answer: '[0, 1, 4, 9, 16]',
            },
            {
              question: 'What is the purpose of the `yield` keyword in Python?',
              options: [
                'To return a value from a function',
                'To create a generator',
                'To define a loop',
                'To create a list',
              ],
              answer: 'To create a generator',
            },
          ],
        },
        java: {
          easy: [
            {
              question: 'What is the output of `System.out.println("Hello, World!");` in Java?',
              options: ['Hello, World!', 'Error', 'No output', 'Undefined'],
              answer: 'Hello, World!',
            },
            {
              question: 'Which keyword is used to define a class in Java?',
              options: ['class', 'struct', 'interface', 'object'],
              answer: 'class',
            },
          ],
          medium: [
            {
              question: 'What is the output of `System.out.println(10 / 3);` in Java?',
              options: ['3', '3.333', '3.0', 'Error'],
              answer: '3',
            },
            {
              question: 'What is the purpose of the `final` keyword in Java?',
              options: [
                'To prevent inheritance',
                'To prevent method overriding',
                'To define a constant',
                'All of the above',
              ],
              answer: 'All of the above',
            },
          ],
          hard: [
            {
              question: 'What is the output of `System.out.println(Math.floor(5.9));` in Java?',
              options: ['5.0', '5.9', '6.0', 'Error'],
              answer: '5.0',
            },
            {
              question: 'What is the purpose of the `synchronized` keyword in Java?',
              options: [
                'To create a thread-safe method',
                'To create a static method',
                'To create a final method',
                'To create an abstract method',
              ],
              answer: 'To create a thread-safe method',
            },
          ],
        },
      },
    };
  }

  handleLanguageChange = (event) => {
    this.setState({ language: event.target.value, currentQuestionIndex: 0 });
  };

  handleLevelChange = (event) => {
    this.setState({ level: event.target.value, currentQuestionIndex: 0 });
  };

  goToNextQuestion = () => {
    this.setState((prevState) => ({
      currentQuestionIndex:
        (prevState.currentQuestionIndex + 1) %
        this.state.questions[this.state.language][this.state.level].length,
    }));
  };

  goToPreviousQuestion = () => {
    this.setState((prevState) => ({
      currentQuestionIndex:
        (prevState.currentQuestionIndex - 1 +
          this.state.questions[this.state.language][this.state.level].length) %
        this.state.questions[this.state.language][this.state.level].length,
    }));
  };

  render() {
    const { language, level, currentQuestionIndex, questions } = this.state;
    const currentQuestion = questions[language][level][currentQuestionIndex];

    return (
      <div style={{ backgroundColor: '#F5F5F5', minHeight: '100vh', padding: '20px' }}>
        {/* Language and Level Selection */}
        <div style={{ marginBottom: '20px', display: 'flex', gap: '20px' }}>
          <div>
            <label style={{ color: '#C06500', fontWeight: 'bold', marginRight: '10px' }}>Select Language:</label>
            <select
              value={language}
              onChange={this.handleLanguageChange}
              style={{
                padding: '5px 10px',
                borderRadius: '5px',
                border: '1px solid #C06500',
                backgroundColor: '#FFFFFF',
                color: '#C06500',
              }}
            >
              <option value="c">C</option>
              <option value="cpp">C++</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
          </div>
          <div>
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

export default Programming;