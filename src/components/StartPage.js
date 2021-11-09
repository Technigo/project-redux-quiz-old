import React from "react";
import "./StartPage.css";

export const StartPage = () => {
  return (
    <section className="start-container">
      <h1>Are you a foodie? Take the quiz to find out!</h1>
      <img
        src="https://media.istockphoto.com/vectors/pizza-world-vector-id871230860?b=1&k=20&m=871230860&s=170667a&w=0&h=XdCsMkOzuc-P6wpPKi2eyU20doRqCMW9aa1Kmnmz-Zg="
        alt="world of food"
      />
      <button>This is a button to start the quiz</button>
    </section>
  );
};
