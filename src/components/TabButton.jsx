import React from "react";
import "../styles/tab-button.scss";

// TabButton component definition
const TabButton = ({
  btnImg,
  handleClick,
  name,
  arrowImage,
  showArrowImg,
  width,
  height,
  disabled,
}) => {
  // Render the button element with dynamic class and styles
  return (
    <>
      <button
        // Call handleClick function with the button name as argument when clicked
        onClick={() => handleClick(name)}
        // Apply dynamic classes to style the button
        className={`tab-button ${btnImg}`}
        // Apply dynamic styles for width, height, and display based on props
        style={{
          width: width && width,
          height: height && height,
          display: disabled ? "none" : "",
        }} 
      />
      {/* Render arrow image if 'showArrowImg' prop is true */}
      {showArrowImg && <img src={arrowImage} className="arrowImg" />}
    </>
  );
};

// Export the TabButton component
export default TabButton;

