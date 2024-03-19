/* eslint-disable */

import "./style.css";
window.onload = function() {
  const cardElement = document.querySelector("#theCard");

  let cardValues = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const cardSuits = ["heart", "spade", "club", "diamond"];

  function randomCard() {
    const valueIndex = Math.floor(Math.random() * cardValues.length);
    const suitIndex = Math.floor(Math.random() * cardSuits.length);

    const cardValue = cardValues[valueIndex];
    const cardSuit = cardSuits[suitIndex];

    cardElement.className = "card suit-" + cardSuit;
    cardElement.querySelector("#cardContent").innerHTML = cardValue;
  }

  randomCard();
};
