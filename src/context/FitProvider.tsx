'use client'
import { CardType } from "@/app/types/CardType";
import { createContext, ReactNode, useState } from "react";

interface FitType{
    todayPlan: CardType[];
    setTodayPlan: React.Dispatch<React.SetStateAction<CardType[]>>;
    saveLater: CardType[];
    setSaveLater: React.Dispatch<React.SetStateAction<CardType[]>>;
}

export const FitContext = createContext<FitType>({
    todayPlan: [],
    setTodayPlan: () => {},
    saveLater: [],
    setSaveLater: () => {}
})

const FitProvider = ({children}: {children: ReactNode}) => {
    const [todayPlan, setTodayPlan] = useState<CardType[]>([]);
    const [saveLater, setSaveLater] = useState<CardType[]>([]);

    const shared = {
        todayPlan, setTodayPlan, 
        saveLater, setSaveLater
    }
    return (
       <FitContext.Provider value={shared}>{children}</FitContext.Provider>
    );
};

export default FitProvider;