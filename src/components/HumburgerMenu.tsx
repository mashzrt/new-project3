import React, { useState } from "react";

const HumMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <button className="menu-btn" onClick={handleOpenMenu}>
        |||
      </button>
      <button className="menu-btn" onClick={handleCloseMenu}>
        x
      </button>

      {isMenuOpen && <div className="menu"></div>}
    </div>
  );
};

export default HumMenu;
