import card_image from '../assets/card-image.jpg';
import colombia_flag from '../assets/colombia-flag.svg';
import calendar from '../assets/calendar.svg';
import weight_icon from '../assets/weight-icon.svg';
import { Button } from '@mui/material';

export function Card() {
    return (
        <div className="w-full h-full p-4 bg-[#F1F2F6] rounded-[12px] flex flex-col items-center gap-2.5 relative">
            <img
                className="w-full h-[160px] bg-white rounded-[8px] object-cover shadow"
                src={card_image}
                alt="Card"
            />
            <div className="w-full flex flex-row items-start gap-3">
                <div className="flex-1 flex flex-col gap-2.5">
                    <div className="w-full text-[#0A203B] font-semibold text-base md:text-lg">
                        Awkan Fitness Winter Editions
                    </div>
                    <div className="w-full h-[27px] flex items-center text-[#6D757E] text-xs font-normal">
                        La competencia mas épica del suroccidente.
                    </div>
                </div>
                <div className="flex flex-col items-center bg-white rounded-[4px] px-2 py-4 shadow gap-2">
                    <div className="w-4 h-4 relative mb-1">
                        <img src={calendar} alt="Calendar Icon" className="w-4 h-4 object-contain" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex flex-row items-center gap-1 text-base">
                            <span className="text-[#0A203B]">22</span>
                            <span className="text-[#FFBD00]">-</span>
                            <span className="text-[#0A203B]">15</span>
                        </div>
                        <div className="text-[#FFBD00] text-xs font-normal">Jun</div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row gap-2 mt-2">
                <div className="flex-1 bg-[#FFBD00] rounded-[12px] flex justify-center items-center px-2 py-1">
                    <Button
                        className="!text-[#0A203B] !text-xs !font-bold !p-0 min-w-0"
                        startIcon={
                            <div data-mode="Dark" data-type="pesas" className="w-[17px] h-3 relative">
                                <img src={weight_icon} alt="Weight Icon" />
                            </div>
                        }
                    >
                        Participar
                    </Button>
                </div>
                <div className="flex-1 rounded-[12px] flex justify-center items-center px-2 py-1 border border-[#081B33]">
                    <Button
                        className="!text-[#081B33] !text-xs !font-bold !p-0 min-w-0 whitespace-nowrap"
                    >
                        Ver detalle
                    </Button>
                </div>
            </div>
            <div className="absolute top-[13px] right-2 h-5 px-2 py-1 bg-[#F1F6F4] rounded-[4px] flex items-center gap-1">
                <div data-country="Col" className="w-4 h-3 relative">
                    <img src={colombia_flag} alt="Colombia Flag" />
                </div>
                <div className="text-[#0A203B] text-xs font-semibold">Co</div>
            </div>
        </div>
    );
}