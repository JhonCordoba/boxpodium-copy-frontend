import { BackgroundVideo } from "./background-video";
import { Navbar } from "./navbar";

export function Hero()
{
    return (
        <>
        <div style={{position: 'relative', width: '100%', height: 588, overflow: 'hidden'}}>
            <BackgroundVideo />
            <div style={{position: 'relative', zIndex: 2}}>
                <Navbar />
            </div>
        </div>
        </>
    );
}