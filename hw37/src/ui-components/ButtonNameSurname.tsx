import React from "react";

interface UserComponentProps {
  username: string;
}

const UserComponent: React.FC<UserComponentProps> = ({ username }) => {
  const [firstName, lastName] = username.split(" ");

  return (
    <div>
      <button className="btn-ns">
        {firstName} {lastName}{" "}
        <span className="initials">
          {firstName[0]}
          {lastName[0]}
        </span>
      </button>
    </div>
  );
};
const BtnNS: React.FC = () => {
  return (
    <div>
      <UserComponent username="Masha Zaretskaya" />
    </div>
  );
};

export default BtnNS;
