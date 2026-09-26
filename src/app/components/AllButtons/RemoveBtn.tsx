'use client'
import { CardType } from '@/app/types/CardType';
import { FitContext } from '@/context/FitProvider';
import { useContext, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { toast } from 'react-toastify';

interface RemoveCardProps{
    card: CardType,
    active: string
}

const RemoveBtn = ({card, active}: RemoveCardProps) => {
  const { todayPlan, saveLater, setTodayPlan, setSaveLater } = useContext(FitContext);

  const handleRemove = () => {
    if (active === "today"){
        setTodayPlan(todayPlan.filter((item:CardType) => item.id !== card.id));
        toast.success("Removed from today's plan!")
    }
    if (active === "saveLater"){
        setSaveLater(saveLater.filter((item:CardType) => item.id !== card.id));
        toast.success("Removed from saved later plan!")
    }
  }

    return (
        <button onClick={handleRemove} className="ml-1 text-[#69707C] hover:text-white" >
          <FiX size={16} />
        </button>
        
    );
};

export default RemoveBtn;