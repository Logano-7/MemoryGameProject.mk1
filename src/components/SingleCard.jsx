import "./SingleCard.css";

export default function SingleCard({ card, handleChoice }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <>
      <div className="card">
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="./public/images/back.jpeg"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </>
  );
}
