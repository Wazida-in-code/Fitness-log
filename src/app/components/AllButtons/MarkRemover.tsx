import { CardType } from '@/app/types/CardType';
import { FitContext } from '@/context/FitProvider';
import { useContext } from 'react';
import { FiCheck } from 'react-icons/fi';

interface MarkRemoverProps{
    card: CardType,
    active: string
}

const MarkRemover = ({card, active}: MarkRemoverProps) => {
    const {todayPlan, saveLater, setTodayPlan, setSaveLater} = useContext(FitContext);

    const handleMarkRemover = () => {
        if (active === "today"){
            setTodayPlan(todayPlan.filter((item:CardType) => item.id !== card.id));
        };

        if (active === "saveLater"){
            setSaveLater(saveLater.filter((item:CardType) => item.id !== card.id));
        };
    }

    return (
        <button onClick={handleMarkRemover} className="flex items-center gap-1.5 rounded-full bg-[#C2F800] px-4 py-2 text-xs font-semibold text-black transition hover:bg-[#b2e600]">
          <FiCheck size={14} />
          Mark as Done
        </button>
    );
};

export default MarkRemover;