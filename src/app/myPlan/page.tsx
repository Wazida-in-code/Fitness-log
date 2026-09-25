"use client";

import { FitContext } from "@/context/FitProvider";
import { useContext, useState } from "react";
import MiniCard from "../components/MiniCard";
import { CardType } from "../types/CardType";
import Link from "next/link";

const MyPlan = () => {
  const { todayPlan, saveLater } = useContext(FitContext);
  const [active, setActive] = useState("today");
  const [sortby, setSortBy] = useState<"duration" | "calori" | "rating">("duration");

  const currentPlan = active === "today" ? todayPlan : saveLater;

  const sortPlan = (cards : CardType[]) => {
      const sortedPlan = [...cards];
      if (sortby === "duration"){
        sortedPlan.sort((a, b) => b.duration - a.duration);
      }else if (sortby === "calori"){
        sortedPlan.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
      }else if (sortby === "rating"){
        sortedPlan.sort((a, b) => b.rating - a.rating);
      }
      return sortedPlan;
  }

  const sortCurrentPlan = sortPlan(currentPlan);

  return (
    <div className="bg-[#000000]">
      <div className="w-11/12 mx-auto py-3">
        <h2 className="text-white font-bold text-4xl mt-4">MY PLAN</h2>
        <p className="text-[#8A92A0] mt-2.5 mb-4">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="w-11/12 mx-auto">
        <div className="bg-[#13161D] border border-[#232732] text-white rounded-xl flex justify-between items-center py-5">
          <div>
            <p className="text-[#8A92A0] ml-5 mb-5">Exercises</p>
            <span className="font-bold text-4xl text-[#C2F800] ml-9">
              {currentPlan.length}
            </span>
          </div>

          <div>
            <p className="text-[#8A92A0] mb-5">Minutes</p>
            <span className="font-bold text-4xl text-white ml-3">
              {currentPlan.reduce(
                (total: number, item: CardType) => total + item.duration,
                0
              )}
            </span>
          </div>

          <div>
            <p className="text-[#8A92A0] mr-5 mb-5">Calories</p>
            <span className="font-bold text-4xl text-white ml-2">
              {currentPlan.reduce(
                (total: number, item: CardType) =>
                  total + item.caloriesBurned,
                0
              )}
            </span>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto mt-6">
        <div className="flex items-center justify-between">
          <div className="tabs tabs-border">
            <input
              type="radio"
              name="my_tabs_2"
              className={`tab ${
                active === "today"
                  ? "text-[#C2F800] font-bold border border-[#2B303D] bg-[#1F242D]"
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
                  ? "text-[#C2F800] font-bold border border-[#2B303D] bg-[#1F242D]"
                  : "text-[#9CA3AF]"
              }`}
              aria-label="Saved"
              onChange={() => setActive("saveLater")}
            />
          </div>
              <p className="text-[#8A92A0] ml-[600px]">Sort By</p>
          <select
            value={sortby}
            onChange={(e) =>
              setSortBy(
                e.target.value as "duration" | "calori" | "rating"
              )
            }
            className="select appearance-none text-white bg-[#232732] border border-[#8A92A0]"
          >
            
            <option value="duration">Duration</option>
            <option value="calori">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        <div className="bg-[#000000] py-10">
          {currentPlan.length > 0 ? (
            sortCurrentPlan.map((card: CardType) => (
              <MiniCard key={card.id} card={card} />
            ))
          ) : (
            <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-[#2B303D] text-center">
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