import { animals } from "./animals";
import React from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");

const root = createRoot(container);

const title = ""; //stores header content

const background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[index];
  const p = document.getElementById("fact");
  p.innerHTML = funFact;
}

const images = [];
for (const animal in animals) {
  const image = (
    <img
      onClick={displayFact}
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );

  images.push(image);
}

const showBack = true;
const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact!" : title}</h1>
    {showBack && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);