"use client";
import { FitContext } from "@/context/FitProvider";
import React, { useContext, useState } from "react";
import MiniCard from "../components/MiniCard";
import { CardType } from "../types/CardType";

const MyPlan = () => {
  const { todayPlan, saveLater } = useContext(FitContext);
  const [active, setActive] = useState("today");

  return (
    <div className="bg-[#000000]">
      <div className="w-11/12 mx-auto py-3">
        <h2 className="text-white font-bold text-4xl mt-4">MY PLAN</h2>
        <p className="text-[#8A92A0] mt-2.5 mb-4">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className=" w-11/12 mx-auto">
        <div className="bg-[#13161D] border border-[#232732] text-white rounded-xl flex justify-between py-5">
          <p className="text-[#8A92A0] ml-5 mb-5">Exercises</p>
          <p className="text-[#8A92A0] mb-5">Minutes</p>
          <p className="text-[#8A92A0] mr-5 mb-5">Calories</p>
        </div>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border w-11/12 mx-auto py-3 border border-[#232732] bg-[#151921] text-white mt-6">
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
        <div className="tab-content border-base-300 bg-[#000000] p-10">
          {todayPlan.length > 0 ? (
            todayPlan.map((card: CardType) => {
              return <MiniCard key={card.id} card={card} />;
            })
          ) : (
            <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-[#2B303D] text-center">
              <h2 className="text-sm font-bold uppercase text-white">
                NOTHING HERE YET
              </h2>

              <p className="mt-1 text-[10px] text-[#8A92A0]">
                Browse the library and add a lift to get today moving.
              </p>

              <button className="mt-4 rounded-full bg-[#C2F800] px-5 py-2 text-[10px] font-bold uppercase text-black transition hover:bg-[#b5e800]">
                Go to workouts
              </button>
            </div>
          )}
        </div>

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
        <div className="tab-content border-base-300 bg-[#000000] p-10">
          {saveLater.length > 0 ? (
            saveLater.map((card: CardType) => {
              return <MiniCard key={card.id} card={card} />;
            })
          ) : (
            <div className="flex min-h-[200px] w-full flex-col items-center justify-center rounded-lg border border-dashed border-[#2B303D] text-center">
              <h2 className="text-sm font-bold uppercase text-white">
                NOTHING HERE YET
              </h2>

              <p className="mt-1 text-[10px] text-[#8A92A0]">
                Browse the library and add a lift to get today moving.
              </p>

              <button className="mt-4 rounded-full bg-[#C2F800] px-5 py-2 text-[10px] font-bold uppercase text-black transition hover:bg-[#b5e800]">
                Go to workouts
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;
