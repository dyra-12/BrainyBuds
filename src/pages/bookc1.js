// BookC1.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookC1 extends Component {
  render() {
    const ContactSection = () => {
      return (
        <section className="contact" id="contact">
          <h1 className="heading">
            <span>Choose the language you </span> prefer
          </h1>

          <div className="icons-container">
            <div className="icons">
              <Link to="/english">
                <button>
                  <h3>English</h3>
                </button>
              </Link>
            </div>

            {/* Add similar Link components for other languages */}
          </div>
        </section>
      );
    };

    return (
      <div>
        <ContactSection />
      </div>
    );
  }
}

export default BookC1;
