'use client'
import { CardType } from "@/app/types/CardType";
import { FitContext } from "@/context/FitProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const TodayPlan = ({card}: {card:CardType}) => {
    const {todayPlan, setTodayPlan} = useContext(FitContext)
    const handleToday = () => {
        setTodayPlan([...todayPlan, card]);
        toast.success("Added to today's plan!")
    }
    return (
        <button onClick={()=> handleToday()} className="w-full rounded-xl bg-[#BAFF00] px-6 py-3 font-bold text-black sm:w-auto">
              Add to today&apos;s plan
        </button>
    );
};

export default TodayPlan;