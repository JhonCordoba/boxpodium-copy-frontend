import BannerImage from '../../assets/banner.jpg';

export function Banner() {
    return (
        <img className="w-full h-full" src={BannerImage} alt="Banner" />
    );
}