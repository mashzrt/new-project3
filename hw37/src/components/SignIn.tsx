import React from "react";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

const SignIn: React.FC = () => {
  return (
    <div>
      <Title title="Sign In" />
    </div>
  );
};

export default SignIn;
