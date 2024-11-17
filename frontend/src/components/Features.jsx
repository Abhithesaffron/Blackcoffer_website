import React from "react";
import "./Features.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faChartBar,
  faGlobe,
  faUsers,
  faShieldAlt,
  faEye, // Import the icon for Transparency
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  const features = [
    { name: "Consistency", icon: faChartLine },
    { name: "Improvement", icon: faChartBar },
    { name: "Branching", icon: faGlobe },
    { name: "Expertise", icon: faUsers },
    { name: "Security", icon: faShieldAlt },
    { name: "Transparency", icon: faEye }, // New feature added
  ];

  return (
    <section className="features">
      <h2>What Makes Us Different</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <div key={index} className="new">
            <div className="new-sub"><FontAwesomeIcon className= "feature-item" icon={feature.icon} size="3x" /></div>
            <div>{feature.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
