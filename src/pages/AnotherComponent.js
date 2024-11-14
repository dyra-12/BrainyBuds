import React, { useEffect, useState } from "react";

const AnotherComponent = () => {
  const [storedLanguage, setStoredLanguage] = useState(() => {
    return localStorage.getItem("selectedLanguage") || "en";
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setStoredLanguage(localStorage.getItem("selectedLanguage") || "en");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); 

  return (
    <div>
      <p>Content in {storedLanguage} language</p>
      {}
    </div>
  );
};

export default AnotherComponent;
