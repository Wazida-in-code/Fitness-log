'use client'
import { CardType } from "@/app/types/CardType";
import { FitContext } from "@/context/FitProvider";
import { useContext } from "react";

const SavePlan = ({card}: {card: CardType}) => {
    const {saveLater, setSaveLater} = useContext(FitContext);
    const handleSave = () => {
        setSaveLater(saveLater);
        alert(`You have save ${card.name}`)
    };
    return (
        <button onClick={() => handleSave()} className="w-full rounded-xl border border-gray-700 px-6 py-3 sm:w-auto">
              Save for later
        </button>
    );
};

export default SavePlan;