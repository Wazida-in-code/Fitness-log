'use client'
import { CardType } from "@/app/types/CardType";
import { FitContext } from "@/context/FitProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const SavePlan = ({ card }: { card: CardType }) => {
   const {saveLater, setSaveLater} = useContext(FitContext);
    const handleSave = () => {
        setSaveLater([...saveLater, card]);
        toast.success("Saved for later!")
    };

  const addDisable = () => {
    toast.error("Already in your plan!");
  };


  const handleClick = () => {
    const alreadyAdded = saveLater.some(
      (item: CardType) => item.id === card.id
    );

    if (alreadyAdded) {
      addDisable();
    } else {
      handleSave();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full rounded-xl bg-[#BAFF00] px-6 py-3 font-bold text-black sm:w-auto"
    >
      Add to today&apos;s plan
    </button>
  );
};

export default SavePlan;