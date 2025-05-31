import logo from '../assets/logo.svg';

export function Logo()
{
    return (
        <>
            <div className="flex-1 flex flex-col justify-start items-start gap-[10px] inline-flex">
                <div data-mode="On Dark" data-type="logo" className="relative overflow-hidden w-[102px] h-[32px]">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{width: 102, height: 32, objectFit: 'contain'}}
                    />
                </div>

            </div>
        </>
    );
}