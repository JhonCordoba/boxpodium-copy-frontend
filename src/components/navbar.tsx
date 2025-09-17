import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Button } from '@mui/material';
import { Logo } from './logo';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

export function Navbar() {
    const navigate = useNavigate();

    return (
        <div className="w-full pt-3 pb-3 px-4 md:px-8 flex flex-col gap-2.5 relative">
            <div className="w-full px-3 md:px-[30px] py-2 md:py-[10px] bg-[rgba(16,33,63,0.70)] rounded-[16px] flex flex-col gap-[10px]">
                <div className="w-full flex flex-row justify-between items-center">
                    <Logo />
                    <div className="flex-1 flex justify-end items-center gap-2 md:gap-5">
                        <Button
                            className="!px-3 !py-2 md:!px-[22px] md:!py-[12px] !bg-[#FFBD00] !rounded-[12px] flex items-center gap-2 md:gap-2.5"
                        >
                            <FitnessCenterIcon fontSize="small" sx={{ color: 'secondary.main' }} />
                            <span className="text-xs md:text-sm font-axiforma" style={{ color: '#0A203B' }}>
                                Crear Competencia
                            </span>
                        </Button>
                        <Button
                            className="!px-3 !py-2 md:!px-[22px] md:!py-[12px] !rounded-[12px] flex items-center gap-2 md:gap-2.5"
                            style={{border: '1.5px solid #FFEAAD'}}
                            onClick={() => navigate("/sign-in")}
                        >
                            <PersonIcon fontSize="small" style={{ color: '#FFEAAD' }} />
                            <span className="text-xs md:text-sm" style={{ color: '#FFEAAD' }}>
                                Iniciar sesión
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}