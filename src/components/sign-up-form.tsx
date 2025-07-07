import BlackLogo from '../assets/black-logo.svg';
import GoogleIcon from '../assets/google-icon.svg';
import HeathIcon from '../assets/health-icon.svg';
import AthleteIcon from '../assets/athlete-icon.svg';
import { Button } from '@mui/material';

export function SignUpForm() {
    return (
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#0A203B] px-8 py-12" id='form-container'>
                <div className="flex flex-col items-center bg-white rounded-xl shadow-md px-6 py-20 gap-6">
                    <img src={BlackLogo} alt="Logo" className="w-32 mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-[#1C1C1C] text-center">
                        Regístrate y deja tu marca
                    </div>
                    <div className="text-lg text-[#1C1C1C] text-center font-normal">
                        Estás a un paso de subir al podio. Crea tu cuenta.
                    </div>
             <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<img src={GoogleIcon} alt="Google Icon" className="w-6 h-6" />}
                    sx={{
                        py: 2,
                        borderRadius: '1rem',
                        borderColor: '#919EAB52',
                        color: '#081B33',
                        fontWeight: 600,
                        fontSize: '1rem',
                        mb: 0.5,
                        textTransform: 'none',
                        gap: 2,
                        backgroundColor: 'white',
                        '&:hover': {
                            borderColor: '#919EAB',
                            backgroundColor: '#f5f5f5',
                        },
                    }}
                >
                    Continuar con Google
                </Button>
                    <div className="relative flex items-center w-full my-2">
                        <hr className="flex-grow border-t border-[#919EAB52]" />
                        <span className="mx-4 bg-white px-2 text-[#1C1C1C] text-base font-normal">o</span>
                        <hr className="flex-grow border-t border-[#919EAB52]" />
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        <input
                            type="text"
                            placeholder="Nombre completo"
                            className="h-14 px-4 rounded-lg outline outline-1 outline-[#919EAB52] text-base text-[#919EAB] font-normal"
                        />
                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className="h-14 px-4 rounded-lg outline outline-1 outline-[#919EAB52] text-base text-[#919EAB] font-normal"
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="h-14 px-4 rounded-lg outline outline-1 outline-[#919EAB52] text-base text-[#919EAB] font-normal"
                        />
                    </div>
                    <div className="w-full text-[#6D757E] text-base font-normal mt-2">
                        ¿Cómo quieres participar?
                    </div>
                    <div className="flex w-full gap-4">
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<img src={HeathIcon} alt="Health Icon" className="w-8 h-8" />}
                            sx={{
                                py: 2,
                                borderRadius: '1rem',
                                borderColor: '#919EAB52',
                                color: '#6D757E',
                                fontWeight: 600,
                                fontSize: '1rem',
                                textTransform: 'none',
                                gap: 2,
                                backgroundColor: 'white',
                                '&:hover': {
                                    borderColor: '#919EAB',
                                    backgroundColor: '#f5f5f5',
                                },
                            }}
                        >
                            Box / Organizador
                        </Button>
                        <Button
                            variant="outlined"
                            fullWidth
                            startIcon={<img src={AthleteIcon} alt="Athlete Icon" className="w-8 h-8" />}
                            sx={{
                                py: 2,
                                borderRadius: '1rem',
                                borderColor: '#919EAB52',
                                color: '#6D757E',
                                fontWeight: 600,
                                fontSize: '1rem',
                                textTransform: 'none',
                                gap: 2,
                                backgroundColor: 'white',
                                '&:hover': {
                                    borderColor: '#919EAB',
                                    backgroundColor: '#f5f5f5',
                                },
                            }}
                        >
                            Atleta
                        </Button>
                    </div>
                    <label className="flex items-start gap-2 w-full mt-2">
                        <input type="checkbox" className="w-5 h-5 mt-1 accent-[#052D59]" />
                        <span className="text-xs text-[#1C1C1C]">
                            Estoy de acuerdo con los{" "}
                            <a href="#" className="text-[#052D59] font-bold underline">Términos y Condiciones</a>
                            {" "}y la nuestra{" "}
                            <a href="#" className="text-[#081B33] font-bold underline">Política de Tratamiento de Datos Personales.</a>
                        </span>
                    </label>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            py: 2,
                            borderRadius: '0.5rem',
                            backgroundColor: '#FFD966',
                            color: '#835E0E',
                            fontWeight: 'bold',
                            fontSize: '0.875rem',
                            mt: 2,
                            boxShadow: 'none',
                            textTransform: 'none',
                            '&:hover': {
                                backgroundColor: '#ffe28c',
                                boxShadow: 'none',
                            },
                        }}
                    >
                        Crear cuenta
                    </Button>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <span className="text-base text-[#1C1C1C]">¿Ya tienes una cuenta?</span>
                        <a href="#" className="text-base text-[#081B33] font-semibold">Inicia sesión aquí</a>
                    </div>
                </div>
                <div className="w-full flex justify-center items-end mt-6">
                    <span className="text-white text-sm text-center">Copyright © 2025 AnswerTIC S.A.S</span>
                </div>
            </div>
    );
}