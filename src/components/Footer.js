import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Footer extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Resources</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About us </a></li>
          </ul>
          {/* <p className="text-center text-muted">© 2024 Your Company, Inc</p> */}
        </footer>
      </div>
    )
  }
}

export default Footer
