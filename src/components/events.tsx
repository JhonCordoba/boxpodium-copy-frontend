import { Button } from "@mui/material";
import { Card } from "./card";

export function Events() {  
    return (
        <div className="w-full px-4 md:px-8 pt-5 md:pt-5 pb-8 md:pb-20 flex flex-col gap-6 md:gap-10">
            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4">
                <div className="flex flex-col">
                    <div className="text-[#0A203B] text-xl md:text-[30px] font-normal leading-[40px] md:leading-[89px] text-left">
                        Eventos en vivo
                    </div>
                    <div className="w-[60px] md:w-[91px] h-[4px] md:h-[6px] bg-[#FFBD00] mt-2 md:mt-[-25px] ml-0" />
                </div>
                <Button
                    className="!text-[#0A203B] !text-xs md:!text-sm !font-bold !px-4 !py-2 md:!px-6 md:!py-2.5 !rounded-full border-2 border-[#0A203B] !outline-none mt-4 md:mt-0"
                >
                    Ver todo
                </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}