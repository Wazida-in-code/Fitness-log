import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar, FiCheck, FiX } from "react-icons/fi";
import { LuFlame } from "react-icons/lu";
import { CardType } from "../types/CardType";

interface CardProps {
  card: CardType;
}

const MiniCard = ({card}: CardProps) => {
  return (
    <div className="flex w-full items-center gap-4 rounded-2xl border border-[#252A33] bg-[#15171D] p-3 sm:p-4">
      {/* Image */}
      <Image
        src={card.image}
        alt={card.name}
        width={115}
        height={65}
        className="h-[65px] w-[115px] shrink-0 rounded-xl object-cover"
      />

      {/* Info */}
      <div className="min-w-0 flex-1">
        {/* Name */}
        <h3 className="truncate text-sm font-bold uppercase text-white sm:text-base">
          {card.name}
        </h3>

        {/* Equipment */}
        <p className="mt-0.5 text-xs text-[#9CA3AF] sm:text-sm">
          {card.equipment}
        </p>

        {/* Stats */}
        <div className="mt-2 flex items-center gap-3 text-[11px] text-[#D1D5DB] sm:gap-4 sm:text-xs">
          {/* Duration */}
          <span className="flex items-center gap-1">
            <FiClock size={13} className="text-[#C2F800]" />
            {card.duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1">
            <LuFlame size={14} className="text-[#C2F800]" />
            {card.caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1">
            <FiStar size={13} className="text-[#C2F800]" />
            {card.rating}
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="hidden items-center gap-2 sm:flex">
        {/* View Details */}
        <Link
          href={`/workouts/${card.id}`}
          className="rounded-full border border-[#39404B] px-4 py-2 text-xs text-white transition hover:bg-[#20242C]"
        >
          View Details
        </Link>

        {/* Mark as Done */}
        <button className="flex items-center gap-1.5 rounded-full bg-[#C2F800] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#b2e600]">
          <FiCheck size={14} />
          Mark as Done
        </button>

        {/* Remove */}
        <button className="ml-1 text-[#69707C] hover:text-white">
          <FiX size={16} />
        </button>
      </div>
    </div>
  );
};

export default MiniCard;
