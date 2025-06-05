import weightIcon from '../assets/weight-icon.svg';
import userIcon from '../assets/user-icon.svg'
import { Button } from '@mui/material';
import { Logo } from './logo';

export function Navbar()
{
    return (
        <>
            <div className="w-full h-full pt-3 pl-8 pr-8 pb-3 flex flex-col justify-center items-start gap-2.5 relative">
                <div className="w-full px-[30px] py-[10px] bg-[rgba(16,33,63,0.70)] rounded-[16px] flex flex-col justify-start items-start gap-[10px]">
                    <div className="w-full flex flex-row justify-between items-center">
                        <Logo />
                        <div className="flex-1 flex justify-end items-center gap-5">
                            <Button style={{paddingLeft: 22, paddingRight: 22, paddingTop: 12, paddingBottom: 12, background: '#FFBD00', borderRadius: 12, justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                <div data-mode="Dark" data-type="weight" className="w-[26px] h-[18px] relative">
                                    <div className="w-[26px] h-[18px] left-0 top-0 absolute">
                                        <img src={weightIcon} alt="icon" />
                                    </div>
                                </div>
                                <span className='text-xs' style={{color: '#0A203B', fontFamily: "'Noto Sans', sans-serif", wordWrap: 'break-word'}}>Crear Competencia</span>
                            </Button>
                            <Button style={{paddingLeft: 22, paddingRight: 22, paddingTop: 12, paddingBottom: 12, borderRadius: 12, outline: '1.50px #FFEAAD solid', outlineOffset: '-1.50px', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'flex'}}>
                                <div data-mode="Light" data-type="user" className="w-[17.5px] h-[18px] relative self-stretch">
                                    <div className="w-[17.5px] h-[20px] left-0 top-0 absolute">
                                        <img src={userIcon} alt="icon" />
                                    </div>
                                </div>
                                <span className='text-xs' style={{color: '#FFEAAD', fontFamily: "'Noto Sans', sans-serif", wordWrap: 'break-word'}}>Iniciar sesión</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}