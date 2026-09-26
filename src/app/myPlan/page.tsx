"use client";

import { FitContext } from "@/context/FitProvider";
import { useContext, useState } from "react";
import MiniCard from "../components/MiniCard";
import { CardType } from "../types/CardType";
import Link from "next/link";

const MyPlan = () => {
  const { todayPlan, saveLater } = useContext(FitContext);
  const [active, setActive] = useState<"today" | "saveLater">("today");
  const [sortby, setSortBy] = useState<"duration" | "calori" | "rating">(
    "duration",
  );

  const currentPlan = active === "today" ? todayPlan : saveLater;

  const sortPlan = (cards: CardType[]) => {
    const sortedPlan = [...cards];
    if (sortby === "duration") {
      sortedPlan.sort((a, b) => b.duration - a.duration);
    } else if (sortby === "calori") {
      sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
    } else if (sortby === "rating") {
      sortedPlan.sort((a, b) => b.rating - a.rating);
    }
    return sortedPlan;
  };

  const sortCurrentPlan = sortPlan(currentPlan);

  return (
    <div className="bg-[#000000]">
      <div className="mx-auto w-11/12 py-3">
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          MY PLAN
        </h2>

        <p className="mb-4 mt-2.5 text-sm text-[#8A92A0] sm:text-base">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="mx-auto w-11/12">
        <div className="flex w-full flex-col rounded-xl border border-[#232732] bg-[#13161D] py-5 text-white sm:flex-row sm:justify-between">
          <div className="flex flex-1 flex-col items-center sm:items-start">
            <p className="mb-2 text-[#8A92A0] sm:ml-5 sm:mb-5">Exercises</p>

            <span className="text-3xl font-bold text-[#C2F800] sm:ml-9 sm:text-4xl">
              {currentPlan.length}
            </span>
          </div>

          <div className="mt-5 flex flex-1 flex-col items-center sm:mt-0 sm:items-start">
            <p className="mb-2 text-[#8A92A0] sm:mb-5">Minutes</p>

            <span className="text-3xl font-bold text-white sm:ml-3 sm:text-4xl">
              {currentPlan.reduce(
                (total: number, item: CardType) => total + item.duration,
                0,
              )}
            </span>
          </div>

          <div className="mt-5 flex flex-1 flex-col items-center sm:mt-0 sm:items-start">
            <p className="mb-2 text-[#8A92A0] sm:mb-5 sm:mr-20">Calories</p>

            <span className="text-3xl font-bold text-white sm:ml-2 sm:text-4xl">
              {currentPlan.reduce(
                (total: number, item: CardType) => total + item.caloriesBurned,
                0,
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 w-11/12">
        <div className="flex items-center justify-between gap-3">
          <div className="tabs tabs-border w-full sm:w-auto">
            <input
              type="radio"
              name="my_tabs_2"
              className={`tab ${
                active === "today"
                  ? "border border-[#2B303D] bg-[#1F242D] font-bold text-[#C2F800]"
                  : "text-[#9CA3AF]"
              }`}
              aria-label="Today's Plan"
              defaultChecked
              onChange={() => setActive("today")}
            />

            <input
              type="radio"
              name="my_tabs_2"
              className={`tab ${
                active === "saveLater"
                  ? "border border-[#2B303D] bg-[#1F242D] font-bold text-[#C2F800]"
                  : "text-[#9CA3AF]"
              }`}
              aria-label="Saved"
              onChange={() => setActive("saveLater")}
            />
          </div>

          <div className="flex items-center gap-2">
            <p className="text-sm text-[#8A92A0] sm:text-base">Sort By</p>

            <select
              value={sortby}
              onChange={(e) =>
                setSortBy(e.target.value as "duration" | "calori" | "rating")
              }
              className="select w-auto appearance-none border border-[#8A92A0] bg-[#232732] text-sm text-white sm:text-base"
            >
              <option value="duration">Duration</option>
              <option value="calori">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        <div className="bg-[#000000] py-6 sm:py-10">
          {currentPlan.length > 0 ? (
            sortCurrentPlan.map((card: CardType) => (
              <MiniCard key={card.id} card={card} active={active} />
            ))
          ) : (
            <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-[#2B303D] px-4 text-center">
              <h2 className="text-sm font-bold uppercase text-white">
                NOTHING HERE YET
              </h2>

              <p className="mt-1 text-[10px] text-[#8A92A0]">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/"
                className="mt-4 rounded-full bg-[#C2F800] px-5 py-2 text-[10px] font-bold uppercase text-black transition hover:bg-[#b5e800]"
              >
                Go to workouts
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
