import React, { useState } from "react";

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div>
        <button className="tabs" onClick={() => handleTabClick(0)}>
          All
        </button>
        <button className="tabs" onClick={() => handleTabClick(1)}>
          My Favorites
        </button>
        <button className="tabs" onClick={() => handleTabClick(2)}>
          Popular
        </button>
      </div>
      {activeTab === 0 && <div>All tab</div>}
      {activeTab === 1 && <div>My Favorites tab</div>}
      {activeTab === 2 && <div>Popular tab</div>}
    </div>
  );
};

export default Tabs;
