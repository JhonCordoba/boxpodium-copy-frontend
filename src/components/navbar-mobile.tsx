import { useState } from "react";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PersonIcon from '@mui/icons-material/Person';
import { Button, SwipeableDrawer } from '@mui/material';
import { Logo } from './logo';
import MenuIcon from '@mui/icons-material/Menu';

export function NavbarMobile() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full pt-3 pb-3 px-4 flex flex-col gap-2.5 md:hidden relative">
            <div className="w-full bg-[rgba(16,33,63,0.70)] rounded-[16px] flex flex-row items-center justify-between px-5 py-3">
                <Logo />
                <Button className="!p-0" onClick={() => setMenuOpen(true)}>
                    <MenuIcon className="text-white" />
                </Button>
            </div>
            <SwipeableDrawer
                anchor="bottom"
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
                onOpen={() => setMenuOpen(true)}
                disableSwipeToOpen={false}
                keepMounted
                slotProps={{
                    paper: {
                        className: "rounded-t-[40px]"
                    }
                }}
            >
                <div
                    className="w-full bg-[#0A203B] flex flex-col items-center gap-10 py-15 px-8"
                >
                    <Button
                        className="w-full !bg-[#FFBD00] !rounded-[12px] flex items-center justify-center gap-2  text-xs font-bold"
                    >
                        <FitnessCenterIcon style={{ color: '#0A203B' }} />
                        <span className="text-black">Crear Competencia</span>
                        
                    </Button>
                    <Button
                        className="w-full !rounded-[12px] flex items-center justify-center gap-2 border border-[#FFEAAD]"
                        style={{
                            outline: '1.5px solid #FFEAAD',
                            outlineOffset: '-1.5px',
                        }}
                    >
                        <PersonIcon style={{ color: '#FFEAAD' }} />
                        <span className="text-[#FFEAAD] text-xs font-bold">Iniciar sesión</span>
                    </Button>
                </div>
            </SwipeableDrawer>
        </nav>
    );
}