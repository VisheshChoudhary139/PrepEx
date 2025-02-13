import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';

export class Progress extends Component {
  static propTypes = {};

  render() {
    return (
      <div style={{ backgroundColor: '#F5F5F5', minHeight: '100vh', paddingBottom: '50px' }}>
        <div className="container mt-4">
          <div className="d-flex justify-content-center gap-3 mb-4">
            <span className="badge p-3 rounded-pill" style={{ backgroundColor: '#C06500', color: '#FFFFFF', fontSize: '1.1rem' }}>Profile</span>
            <span className="badge p-3 rounded-pill" style={{ backgroundColor: '#E89B54', color: '#FFFFFF', fontSize: '1.1rem' }}>On Track</span>
            <span className="badge p-3 rounded-pill" style={{ backgroundColor: '#F4A261', color: '#FFFFFF', fontSize: '1.1rem' }}>Contact us</span>
          </div>
          <div className="text-center mb-5">
            <h1 style={{ color: '#C06500', fontWeight: 'bold', fontSize: '2.5rem' }}>Let's Build Your Progress Report</h1>
            <p style={{ color: '#666666', fontSize: '1.2rem' }}>Follow the numbered guides below to get started.</p>
          </div>

          <div className="row">

            <div className="col-md-4">
              <div className="card p-3 shadow-sm" style={{ backgroundColor: '#FFFFFF', borderRadius: '15px' }}>
                <h4 style={{ color: '#C06500', fontWeight: 'bold' }}>Idea Canvas 🎨✨</h4>
                <p style={{ color: '#666666' }}>Unleash your creativity and organize your thoughts in this dynamic space!</p>
                <div className="d-flex flex-wrap gap-3">
                  <div className="sticky-note">Formula Repisotory</div>
                  <div className="sticky-note">Practice Test</div>
                  <div className="sticky-note">Aptitude Test</div>
                  <div className="sticky-note">Progress Tracking</div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="card p-4 shadow-sm" style={{ backgroundColor: '#FFFFFF', borderRadius: '15px' }}>
                <h4 style={{ color: '#C06500', fontWeight: 'bold' }}>Shapes</h4>
                <div className="mt-3">
                  {[
                    { title: 'Student Information', description: 'Means all basic information about the student', color: '#C06500' },
                    { title: 'Progress Details', description: 'Include the movement of the tasks toward the desired state', color: '#E89B54' },
                    { title: 'Support and Resources Needed', description: 'Materials, and other assets necessary for the progress', color: '#F4A261' },
                    { title: 'Highlights and Key Takeaways', description: 'A main point or lesson learned from a discussion or anything that needs to be highlighted', color: '#F6B98D' },
                    { title: 'What Needs Improvement? → What Went Well?', description: 'Moving all items that need improvement to something better', color: '#F8D1B1' },
                    { title: 'Next Steps', description: 'What to do next!', color: '#F6DEC6' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-3 mb-3 rounded"
                      style={{ backgroundColor: item.color, color: '#FFFFFF', borderRadius: '10px' }}
                    >
                      <h5 style={{ fontWeight: 'bold' }}>{item.title}</h5>
                      <p style={{ marginBottom: '0' }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          .sticky-note {
            background-color: #C06500;
            color: #FFFFFF;
            transform: rotate(-5deg);
            width: 150px;
            text-align: center;
            padding: 20px;
            border-radius: 10px;
            margin: 10px;
            transition: transform 0.3s, background-color 0.3s;
            font-weight: bold;
          }

          .sticky-note:nth-child(even) {
            transform: rotate(3deg);
          }

          .sticky-note:nth-child(3n) {
            transform: rotate(-8deg);
          }

          .sticky-note:nth-child(4n) {
            transform: rotate(6deg);
          }

          .sticky-note:hover {
            background-color: #A0522D;
            cursor: pointer;
            transform: scale(1.1) rotate(0deg);
          }
        `}</style>
      </div>
    );
  }
}

export default Progress;