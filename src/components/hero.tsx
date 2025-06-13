import { BackgroundVideo } from "./background-video";
import { Navbar } from "./navbar";
import { NavbarMobile } from "./navbar-mobile"; 

export function Hero() {
    return (
        <div className="relative w-full h-[400px] md:h-[588px] flex flex-col justify-center items-center">
            <BackgroundVideo />
            {/* Desktop Navbar */}
            <div className="hidden md:block absolute top-0 left-0 w-full z-20">
                <Navbar />
            </div>
            {/* Mobile Navbar */}
            <div className="block md:hidden absolute top-0 left-0 w-full z-20">
                <NavbarMobile />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                <div className="flex flex-col items-center">
                    <div className="relative flex flex-col items-center justify-center px-4 md:px-[95px] py-2 md:py-[10px]">
                        <div className="text-center justify-center">
                            <span className="text-white text-[40px] md:text-[72px] font-bebas font-normal leading-[48px] md:leading-[89px]">
                                Del {" "}
                            </span>
                            <span className="relative inline-block">
                                <span className="text-[#FFBD00] text-[40px] md:text-[72px] font-bebas font-normal leading-[48px] md:leading-[89px]">
                                    WOD
                                </span>
                                <span className="absolute left-0 bottom-0 w-full h-[4px] md:h-[6px] bg-[#FFBD00]"></span>
                            </span>
                            <span className="text-white text-[40px] md:text-[72px] font-bebas font-normal leading-[48px] md:leading-[89px]">
                                {" "}al podio,<br className="hidden md:block" />sin perder tiempo.
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="max-w-[95vw] w-full md:w-[603px] text-center text-white text-base md:text-[20px] font-axiforma font-normal leading-[24px] md:leading-[31px]">
                            Organiza, visualiza y comparte los resultados de tus eventos de CrossFit en tiempo real, fácil, rápido e intuitivo.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}