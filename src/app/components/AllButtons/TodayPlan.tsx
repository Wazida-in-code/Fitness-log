'use client'
import { CardType } from "@/app/types/CardType";
import { FitContext } from "@/context/FitProvider";
import { useContext } from "react";

const TodayPlan = ({card}: {card:CardType}) => {
    const {todayPlan, setTodayPlan} = useContext(FitContext)
    const handleToday = () => {
        setTodayPlan(todayPlan);
        alert(`You have add ${card.name}`)
    }
    return (
        <button onClick={()=> handleToday()} className="w-full rounded-xl bg-[#BAFF00] px-6 py-3 font-bold text-black sm:w-auto">
              Add to today&apos;s plan
        </button>
    );
};

export default TodayPlan;