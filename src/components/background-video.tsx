import heroVideo from '../assets/hero.mp4';

export function BackgroundVideo()
{
    return (
        <>
            <div style={{
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                position: 'absolute',
                zIndex: 0,
                overflow: 'hidden'
            }}>
                <video
                    src={heroVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                    }}
                    poster="https://placehold.co/1923x816"
                />
                <div style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(0deg, rgba(13, 37, 70, 0.80) 0%, rgba(13, 37, 70, 0.80) 100%)',
                    zIndex: 1
                }} />
            </div>
        </>
    )
}