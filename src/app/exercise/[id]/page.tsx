import { CardType } from "@/app/types/CardType";
import Image from "next/image";

interface CardDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

const CardDetails = async ({ params }: CardDetailsProps) => {
  const { id } = await params;
  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
  const card = await res.json();

  if (!card.id) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0E1014] px-4">
        <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">
          Workout not found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0E1014] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-7xl gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
        {/* Image */}
        <div>
          <Image
            src={card.image}
            alt={card.name}
            width={700}
            height={700}
            className="h-auto w-full rounded-2xl object-cover"
          />
        </div>

        {/* Details */}
        <div>
          {/* Name */}
          <h1 className="text-3xl font-black uppercase sm:text-4xl md:text-5xl">
            {card.name}
          </h1>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-gray-400 sm:mt-4 sm:text-base">
            {card.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-3">
            {card.muscleGroups.map((muscle: string, ind: number) => (
              <span
                key={ind}
                className="rounded-full bg-[#BAFF00] px-3 py-1.5 text-xs font-bold uppercase text-black sm:px-4 sm:py-2 sm:text-sm"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Information */}
          <div className="mt-5 overflow-hidden rounded-2xl border border-[#252933] bg-[#15171D] sm:mt-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#252933] px-4 py-3 sm:px-5 sm:py-4">
              <span className="text-xs font-bold text-gray-500 sm:text-sm">
                EQUIPMENT
              </span>
              <span className="text-right text-sm sm:text-base">
                {card.equipment}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#252933] px-4 py-3 sm:px-5 sm:py-4">
              <span className="text-xs font-bold text-gray-500 sm:text-sm">
                DIFFICULTY
              </span>
              <span className="text-right text-sm sm:text-base">
                {card.difficulty}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#252933] px-4 py-3 sm:px-5 sm:py-4">
              <span className="text-xs font-bold text-gray-500 sm:text-sm">
                SETS
              </span>
              <span className="text-right text-sm sm:text-base">
                {card.sets}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#252933] px-4 py-3 sm:px-5 sm:py-4">
              <span className="text-xs font-bold text-gray-500 sm:text-sm">
                REPS
              </span>
              <span className="text-right text-sm sm:text-base">
                {card.reps}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#252933] px-4 py-3 sm:px-5 sm:py-4">
              <span className="text-xs font-bold text-gray-500 sm:text-sm">
                DURATION
              </span>
              <span className="text-right text-sm sm:text-base">
                {card.duration} min
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#252933] px-4 py-3 sm:px-5 sm:py-4">
              <span className="text-xs font-bold text-gray-500 sm:text-sm">
                CALORIES
              </span>
              <span className="text-right text-sm sm:text-base">
                {card.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 sm:px-5 sm:py-4">
              <span className="text-xs font-bold text-gray-500 sm:text-sm">
                RATING
              </span>
              <span className="text-right text-sm sm:text-base">
                {card.rating}
              </span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6 sm:mt-7">
            <h2 className="text-lg font-bold sm:text-xl">INSTRUCTIONS</h2>

            <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
              {card.instructions.map((instruction: string, index: number) => (
                <div
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-gray-400 sm:gap-4 sm:text-base"
                >
                  <span className="shrink-0">{index + 1}.</span>

                  <p>{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <button className="w-full rounded-xl bg-[#BAFF00] px-6 py-3 font-bold text-black sm:w-auto">
              Add to today&apos;s plan
            </button>

            <button className="w-full rounded-xl border border-gray-700 px-6 py-3 sm:w-auto">
              Save for later
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardDetails;
