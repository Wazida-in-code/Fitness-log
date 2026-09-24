'use client'
import { createContext, ReactNode, useState } from "react";

export const FitContext = createContext({})

const FitProvider = ({children}: {children: ReactNode}) => {
    const [todayPlan, setTodayPlan] = useState([]);
    const [saveLater, setSaveLater] = useState([]);

    const shared = {
        todayPlan, setTodayPlan, 
        saveLater, setSaveLater
    }
    return (
       <FitContext.Provider value={shared}>{children}</FitContext.Provider>
    );
};

export default FitProvider;