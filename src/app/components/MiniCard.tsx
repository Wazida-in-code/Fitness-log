import Image from "next/image";
import Link from "next/link";
import { FiClock, FiStar } from "react-icons/fi";
import { LuFlame } from "react-icons/lu";
import { CardType } from "../types/CardType";
import RemoveBtn from "./AllButtons/RemoveBtn";
import MarkRemover from "./AllButtons/MarkRemover";

interface CardProps {
  card: CardType;
  active: string;
}

const MiniCard = ({ card, active }: CardProps) => {
return (
  <div className="flex w-full flex-col gap-4 rounded-2xl border border-[#252A33] bg-[#15171D] p-3 sm:flex-row sm:items-center sm:p-4">
    {/* Top section on mobile / Image on desktop */}
    <div className="flex w-full items-center gap-3 sm:w-auto">
      {/* Image */}
      <Image
        src={card.image}
        alt={card.name}
        width={115}
        height={65}
        className="h-[65px] w-[115px] shrink-0 rounded-xl object-cover"
      />

      {/* Info */}
      <div className="min-w-0 flex-1 sm:hidden">
        {/* Name */}
        <h3 className="truncate text-sm font-bold uppercase text-white">
          {card.name}
        </h3>

        {/* Equipment */}
        <p className="mt-0.5 truncate text-xs text-[#9CA3AF]">
          {card.equipment}
        </p>
      </div>
    </div>

    {/* Info - Desktop */}
    <div className="hidden min-w-0 flex-1 sm:block">
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
        <span className="flex items-center gap-1 whitespace-nowrap">
          <FiClock size={13} className="text-[#C2F800]" />
          {card.duration} min
        </span>

        {/* Calories */}
        <span className="flex items-center gap-1 whitespace-nowrap">
          <LuFlame size={14} className="text-[#C2F800]" />
          {card.caloriesBurned} kcal
        </span>

        {/* Rating */}
        <span className="flex items-center gap-1 whitespace-nowrap">
          <FiStar size={13} className="text-[#C2F800]" />
          {card.rating}
        </span>
      </div>
    </div>

    {/* Stats - Mobile */}
    <div className="flex items-center gap-3 text-[11px] text-[#D1D5DB] sm:hidden">
      {/* Duration */}
      <span className="flex items-center gap-1 whitespace-nowrap">
        <FiClock size={13} className="text-[#C2F800]" />
        {card.duration} min
      </span>

      {/* Calories */}
      <span className="flex items-center gap-1 whitespace-nowrap">
        <LuFlame size={14} className="text-[#C2F800]" />
        {card.caloriesBurned} kcal
      </span>

      {/* Rating */}
      <span className="flex items-center gap-1 whitespace-nowrap">
        <FiStar size={13} className="text-[#C2F800]" />
        {card.rating}
      </span>
    </div>

    {/* Buttons */}
    <div className="flex w-full items-center gap-2 sm:w-auto">
      {/* View Details */}
      <Link
        href={`/exercise/${card.id}`}
        className="flex-1 rounded-full border border-[#39404B] px-3 py-2 text-center text-xs text-white transition hover:bg-[#20242C] sm:flex-none sm:px-4"
      >
        View Details
      </Link>

      {/* Mark as Done */}
      <MarkRemover card={card} active={active} />

      {/* Remove */}
      <RemoveBtn card={card} active={active} />
    </div>
  </div>
);
};

export default MiniCard;
