import React, { useState } from "react";
import "./SuccessStories.css";

const SuccessStories = () => {
  const initialStories = [
    { date: "2024 March 17", title: "Efficient Supply Chain Assessment: Overcoming Technical Hurdles for Web Application Development" },
    { date: "2024 March 17", title: "Streamlined Integration: Interactive Brokers API with Python for Desktop Trading Application" },
    { date: "2024 March 18", title: "Revolutionizing AI Deployment: A Cloud-Based Solution for Rapid Model Training" },
    { date: "2024 March 19", title: "IoT-Driven Automation: Enhancing Efficiency in Smart Homes and Industries" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < initialStories.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="success-stories">
      {/* Header Section */}
      <div className="success-stories-header">
        <h2>Success Stories</h2>
        <a href="/" className="read-all">
          Read all stories &gt;
        </a>
      </div>

      {/* Stories Section */}
      <div className="story-container">
        <div
          className="story-list"
          style={{
            transform: `translateX(-${currentIndex * 340}px)`, // Adjust for story width + margin
          }}
        >
          {initialStories.map((story, index) => (
            <div key={index} className="story">
              <div className="story-date">{story.date}</div>
              <div className="story-title">{story.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons Below Stories */}
      <div className="navigation-container">
        <div className="navigation">
          <button
            className="nav-button left"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &lt;
          </button>
          <button
            className="nav-button right"
            onClick={handleNext}
            disabled={currentIndex === initialStories.length - 1}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
