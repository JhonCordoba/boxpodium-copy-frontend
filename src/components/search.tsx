import weightIcon from '../assets/weight-gray-icon.svg';
import filterIcon from '../assets/filter-icon.svg';
import searchIcon from '../assets/search-icon.svg';
import { Button } from '@mui/material';

export function Search() {
    return (
        <div className="w-full px-4 md:px-20 py-4 md:py-8 flex flex-col items-start gap-4 md:gap-10">
            <div className="w-full px-4 md:px-8 py-3 md:py-4 bg-[#F1F2F6] rounded-[12px] flex flex-col items-center gap-4 md:gap-6">
                <div className="w-full h-[21px] flex flex-col justify-center text-[#0A203B] text-lg md:text-[22px] font-normal leading-[24px] md:leading-[28px]">
                    Tu próxima victoria empieza aquí.
                </div>
                <div className="w-full flex flex-wrap justify-between items-center gap-3 md:gap-5">
                    <div className="flex-1 min-w-[180px] md:min-w-[250px] px-2 md:px-3 py-2 md:py-3 bg-white rounded-[8px] outline outline-1 outline-[rgba(145,158,171,0.32)] outline-offset-[-1px] flex items-center gap-2">
                        <div className="flex items-center gap-2 w-full">
                            <div data-mode="Dark" data-type="pesas" className="w-5 md:w-[26px] h-[18px] relative">
                                <div className="w-5 md:w-[26px] h-[18px] absolute left-0 top-0">
                                    <img src={weightIcon} alt="icon" />                                
                                </div>
                            </div>
                            <input
                                type="text"
                                className="flex-1 bg-transparent outline-none text-[#919EAB] text-sm md:text-[14px] font-normal leading-[20px] placeholder-[#919EAB]"
                                placeholder="Buscar competencia / Ubicación"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 md:gap-5 w-full md:w-auto mt-2 md:mt-0">
                        <div className="p-2 md:p-3 bg-white rounded-[12px] outline outline-1 outline-[#DBE0E4] outline-offset-[-1px] flex items-center gap-2">
                            <Button className="w-8 h-8 min-w-0 p-0 flex items-center justify-center">
                                <img src={filterIcon} alt="icon" />
                            </Button>
                        </div>
                        <div className="w-[120px] md:w-[180px] h-[36px] md:h-[40px] px-2 md:px-3 bg-[#FFBD00] rounded-[12px] flex justify-center items-center gap-2 md:gap-2.5">
                            <Button className="w-full h-full flex items-center justify-center !p-0 min-w-0 bg-transparent shadow-none">
                                <div className="text-black text-sm md:text-[14px] font-semibold leading-[20px]">Buscar</div>
                                <div className="w-6 md:w-7 h-6 md:h-7 relative overflow-hidden ml-1">
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