import weightIcon from '../assets/weight-icon.svg';
import userIcon from '../assets/user-icon.svg'
import { Button } from '@mui/material';
import { Logo } from './logo';

export function Navbar() {
    return (
        <div className="w-full pt-3 pb-3 px-4 md:px-8 flex flex-col gap-2.5 relative">
            <div className="w-full px-3 md:px-[30px] py-2 md:py-[10px] bg-[rgba(16,33,63,0.70)] rounded-[16px] flex flex-col gap-[10px]">
                <div className="w-full flex flex-row justify-between items-center">
                    <Logo />
                    <div className="flex-1 flex justify-end items-center gap-2 md:gap-5">
                        <Button
                            className="!px-3 !py-2 md:!px-[22px] md:!py-[12px] !bg-[#FFBD00] !rounded-[12px] flex items-center gap-2 md:gap-2.5"
                        >
                            <div data-mode="Dark" data-type="weight" className="w-5 h-[18px] relative">
                                <div className="w-5 h-[18px] left-0 top-0 absolute">
                                    <img src={weightIcon} alt="icon" />
                                </div>
                            </div>
                            <span className="text-xs md:text-sm" style={{ color: '#0A203B', fontFamily: "'Noto Sans', sans-serif" }}>
                                Crear Competencia
                            </span>
                        </Button>
                        <Button
                            className="!px-3 !py-2 md:!px-[22px] md:!py-[12px] !rounded-[12px] flex items-center gap-2 md:gap-2.5"
                            style={{
                                border: '1.5px solid #FFEAAD',
                                outlineOffset: '-1.5px',
                            }}
                        >
                            <div data-mode="Light" data-type="user" className="w-4 h-[18px] relative self-stretch">
                                <div className="w-4 h-5 left-0 top-0 absolute">
                                    <img src={userIcon} alt="icon" />
                                </div>
                            </div>
                            <span className="text-xs md:text-sm" style={{ color: '#FFEAAD', fontFamily: "'Noto Sans', sans-serif" }}>
                                Iniciar sesión
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}