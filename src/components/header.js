import React, { useState, useEffect } from "react";
import "../css/style.css";

function Header() {
  // State to manage the selected language
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    // Initialize with the value stored in local storage or default to 'en'
    return localStorage.getItem("selectedLanguage") || "en";
  });

  // Function to handle language change
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    // Update state
    setSelectedLanguage(newLanguage);
  };

  // Update local storage when selectedLanguage changes
  useEffect(() => {
    localStorage.setItem("selectedLanguage", selectedLanguage);
    // You can perform additional actions here based on the selected language, such as triggering a translation
  }, [selectedLanguage]);

  return (
    <header className="header">
      <a href="#" className="logo">
        {" "}
        <i className="fas fa-school"></i>Brainy Buds
      </a>

      <nav className="navbar">
        <a href="./index.html">home</a>
        <a href="#education">Education</a>
        <a href="#teacher">Textbook</a>
        <a href="#gallery">Our games</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Language Dropdown */}
      <div className="language-dropdown">
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="bn">Bengali</option>
          <option value="gu">Gujarati</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          {/* Add more language options as needed */}
        </select>
      </div>

      <div className="icons">
        <div className="fas fa-user" id="login-btn"></div>
        <div className="fas fa-bars" id="menu-btn"></div>
      </div>
    </header>
  );
}

export default Header;
