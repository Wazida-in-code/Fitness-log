import Image from "next/image";
import { CardType } from "../types/CardType";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { LuFlame } from "react-icons/lu";

interface CardProps {
  card: CardType;
}

const CardPage = ({ card }: CardProps) => {
  return (
    
    <Link href={`/exercise/${card.id}`}>
      <div className="w-11/12 my-2 mx-auto overflow-hidden rounded-2xl border border-gray-800 hover:border-[#baff00] bg-[#15171d] text-white shadow-lg">
        {/* Image */}
        <div>
          <Image
            src={card.image}
            alt={card.name}
            width={430}
            height={10}
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Muscle Groups */}
          <div className="mb-6 flex gap-3">
            {card.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#baff00] px-4 py-1.5 text-sm font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="text-xl font-extrabold uppercase tracking-wide">
            {card.name}
          </h2>

          {/* Equipment */}
          <p className="mt-2 text-lg text-gray-400">{card.equipment}</p>

          {/* Divider */}
          <div className="my-4 h-px bg-gray-800"></div>

          {/* Info */}
          <div className="flex items-center gap-7 text-gray-400">
            {/* Duration */}
            <div className="flex items-center gap-2">
            <FiClock size={13} />
              <span>{card.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <LuFlame size={16}  />
              <span>{card.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
                <FiStar size={13} />
              <span>{card.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardPage;
