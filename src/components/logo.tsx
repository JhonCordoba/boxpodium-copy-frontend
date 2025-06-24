import logo from '../assets/logo.svg';

export function Logo()
{
    return (
        <>
            <div data-mode="On Dark" data-type="logo">
                <img
                    src={logo}
                    alt="Logo"
                />
            </div>
        </>
    );
}