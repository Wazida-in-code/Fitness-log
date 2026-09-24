import CardPage from "./Card";
import { CardType } from "../types/CardType";

const AllCards = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const cards = await res.json();

  return (
    <div className="bg-[#000000]">
      <h2 className="text-4xl font-bold">THE LIBRARY</h2>
      <p>Twelve lifts covering every major muscle group.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((card: CardType) => {
          return <CardPage key={card.id} card={card} />;
        })}
      </div>
    </div>
  );
};

export default AllCards;
