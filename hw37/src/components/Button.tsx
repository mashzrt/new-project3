import React, { useState } from "react";

type ButtonProps = {
  content: string;
  isActive: boolean;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ content, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonClass = isActive ? "button active" : "button disabled";

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={!isActive}
    >
      {content}
    </button>
  );
};

const App: React.FC = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <Button content="Primary" isActive={true} onClick={handleClick} />
    </div>
  );
};

export default App;
