import { Logo } from "./logo";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export function Footer() {
    return (
        <>
            <div className="w-full bg-[#0A203B] flex flex-col md:flex-row flex-wrap items-center justify-center py-8 px-4 gap-8">

                <div className="flex-1 flex flex-wrap justify-center items-center gap-20 px-8">
                    <div className="flex flex-col justify-center gap-5 w-full md:w-auto items-center md:items-start">
                        <Logo />
                    </div>
                    <div className="flex flex-col gap-5 min-w-[180px]">
                        <div>
                            <h1 className="text-white text-2xl">Comunidad</h1>
                            <div className="w-[85px] h-[6px] bg-[#FFBD00] mt-2" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <a className="text-white text-base" href="#">FAQ</a>
                            <a className="text-white text-base" href="#">Noticias</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 min-w-[180px]">
                        <div>
                            <h1 className="text-white text-2xl">Recursos</h1>
                            <div className="w-[85px] h-[6px] bg-[#FFBD00] mt-2" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <a className="text-white text-base" href="#">Política de Privacidad</a>
                            <a className="text-white text-base" href="#">Términos y Condiciones</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 min-w-[180px]">
                        <div>
                            <h1 className="text-white text-2xl">Contacto</h1>
                            <div className="w-[85px] h-[6px] bg-[#FFBD00] mt-2" />
                        </div>
                        <div className="flex flex-row items-center gap-4 mt-2">
                            <a href="#">
                                <WhatsAppIcon className="text-white" />
                            </a>
                            <a href="#">
                                <InstagramIcon className="text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[70px] bg-[#061930] flex justify-center items-center">
                <p className="text-white text-sm text-center">
                    Copyright © 2025 Answertic. Todos los derechos reservados
                </p>
            </div>
        </>
    );
}