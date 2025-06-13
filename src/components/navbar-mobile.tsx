import { useState } from "react";
import weightIcon from '../assets/weight-icon.svg';
import userIcon from '../assets/user-icon.svg';
import { Button } from '@mui/material';
import { Logo } from './logo';
import menuIcon from '../assets/menu-icon.svg';

export function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full pt-3 pb-3 px-4 flex flex-col gap-2.5 md:hidden relative">
            <div className="w-full bg-[rgba(16,33,63,0.70)] rounded-[16px] flex flex-row items-center justify-between px-5 py-3">
                <Logo />
                <Button className="!p-0" onClick={() => setMenuOpen(!menuOpen)}>
                    <img src={menuIcon} alt="Menu Icon" className="w-6 h-6" />
                </Button>
            </div>
            {menuOpen && (
                <div className="w-full bg-[#0A203B] rounded-[40px] flex flex-col items-center gap-5 py-10 px-8 mt-4">
                    <Button
                        className="w-full !bg-[#FFBD00] !rounded-[12px] flex items-center justify-center gap-2 py-4 text-black text-xs font-bold"
                    >
                        <img src={weightIcon} alt="icon" className="w-[26px] h-[18px]" />
                        Crear Competencia
                    </Button>
                    <Button
                        className="w-full !rounded-[12px] flex items-center justify-center gap-2 py-3 border border-[#FFEAAD]"
                        style={{
                            outline: '1.5px solid #FFEAAD',
                            outlineOffset: '-1.5px',
                        }}
                    >
                        <img src={userIcon} alt="icon" className="w-[18px] h-[20px]" />
                        <span className="text-[#FFEAAD] text-xs font-bold">Iniciar sesión</span>
                    </Button>
                </div>
            )}
        </nav>
    );
}