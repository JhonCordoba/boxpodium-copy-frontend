import { Logo } from "./logo";
import whatsAppIcon from '../assets/whatsapp-icon.svg';
import instagramIcon from '../assets/instagram-icon.svg';

export function Footer() {
    return (
        <>
            <div className="w-full bg-[#0A203B] flex flex-col md:flex-row flex-wrap items-center justify-center py-8 px-4 gap-8">

                <div className="min-w-[300px] flex flex-col items-center justify-center gap-2 p-2">
                    <div data-mode="On Dark" data-type="logo" className="w-[230px] h-[72px] relative overflow-hidden flex items-center justify-center">
                        <Logo />
                    </div>
                </div>

                <div className="flex-1 min-w-[300px] flex flex-wrap justify-start items-center gap-10 px-8">

                    <div className="flex flex-col gap-5 min-w-[180px]">
                        <div>
                            <div className="text-white text-2xl font-normal">Comunidad</div>
                            <div className="w-[85px] h-[6px] bg-[#FFBD00] mt-2" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <a className="text-white text-base" href="#">FAQ</a>
                            <a className="text-white text-base" href="#">Noticias</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 min-w-[180px]">
                        <div>
                            <div className="text-white text-2xl font-normal">Recursos</div>
                            <div className="w-[85px] h-[6px] bg-[#FFBD00] mt-2" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <a className="text-white text-base" href="#">Política de Privacidad</a>
                            <a className="text-white text-base" href="#">Términos y Condiciones</a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 min-w-[180px]">
                        <div>
                            <div className="text-white text-2xl font-normal">Contacto</div>
                            <div className="w-[85px] h-[6px] bg-[#FFBD00] mt-2" />
                        </div>
                        <div className="flex flex-row items-center gap-4 mt-2">
                            <a href="#">
                                <img src={whatsAppIcon} alt="WhatsApp Icon" className="w-8 h-8" />
                            </a>
                            <a href="#">
                                <img src={instagramIcon} alt="Instagram Icon" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[70px] bg-[#061930] flex justify-center items-center">
                <div className="text-white text-sm text-center">
                    Copyright © 2025 Answertic. Todos los derechos reservados
                </div>
            </div>
        </>
    );
}