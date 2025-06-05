import weightIcon from '../assets/weight-gray-icon.svg';
import filterIcon from '../assets/filter-icon.svg';
import searchIcon from '../assets/search-icon.svg';
import { Button } from '@mui/material';

export function Search() {
    return (
        <div className="w-full h-[115px] px-[40px] py-4 flex flex-col items-start gap-2.5">
            <div className="w-full px-8 py-4 bg-[#F1F2F6] rounded-[12px] flex flex-col items-center gap-6">
                <div className="w-full h-[21px] flex flex-col justify-center text-[#0A203B] text-[22px] font-normal leading-[28px]">
                    Tu próxima victoria empieza aquí.
                </div>
                <div className="w-full flex flex-wrap justify-between items-center gap-5">
                    <div className="flex-1 min-w-[250px] px-3 py-3 bg-white rounded-[8px] outline outline-1 outline-[rgba(145,158,171,0.32)] outline-offset-[-1px] flex items-center gap-2">
                        <div className="flex items-center gap-2 w-full">
                            <div data-mode="Dark" data-type="pesas" className="w-[26px] h-[18px] relative">
                                <div className="w-[26px] h-[18px] absolute left-0 top-0">
                                    <img src={weightIcon} alt="icon" />                                
                                </div>
                            </div>
                            <input
                                type="text"
                                className="flex-1 bg-transparent outline-none text-[#919EAB] text-[14px] font-normal leading-[20px] placeholder-[#919EAB]"
                                placeholder="Buscar competencia / Ubicación"
                            />
                        </div>
                    </div>
                    <div className="pl-2 flex items-center gap-5">
                        <div className="p-3 bg-white rounded-[12px] outline outline-1 outline-[#DBE0E4] outline-offset-[-1px] flex items-center gap-2.5">
                            <Button className="w-8 h-8 relative">
                                <img src={filterIcon} alt="icon" />
                            </Button>
                        </div>
                        <div className="w-[180px] h-[40px] px-3 bg-[#FFBD00] rounded-[12px] flex justify-center items-center gap-2.5">
                            <Button>
                                <div className="text-black text-[14px] font-semibold leading-[20px]">Buscar </div>
                                <div className="w-7 h-7 relative overflow-hidden">
                                    <img src={searchIcon} alt="icon" />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}