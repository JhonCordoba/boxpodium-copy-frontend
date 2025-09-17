export function BackgroundVideo()
{
    return (
        <>
            <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="https://res.cloudinary.com/dckirnls1/video/upload/so_1s/hero_uej6s5.jpg"
                >
                    <source src='https://res.cloudinary.com/dckirnls1/video/upload/v1758128317/hero_uej6s5.mp4' type="video/mp4" />
                </video>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[rgba(13,37,70,0.8)] to-[rgba(13,37,70,0.8)]" />
            </div>
        </>
    )
}