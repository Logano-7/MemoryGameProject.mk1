import "./App.css";
import { useState } from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
  { src: "../public/images/lion.png" },
  { src: "../public/images/ox.png" },
  { src: "../public/images/cow.png" },
  { src: "../public/images/owl.webp" },
  { src: "../public/images/panda.png" },
  { src: "../public/images/rabbit.png" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle click
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <>
      <div className="App">
        <h1>
          Match <span className="">That</span>
        </h1>
        <button onClick={shuffleCards}>New Game</button>

        <div className="card-grid">
          {cards.map((card) => (
            <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
