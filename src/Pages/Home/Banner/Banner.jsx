
import bannerImage from '../../../assets/Images/banner.png'
import Button from '../../../Components/Button';
import NonStickNavBar from '../../Shared/NonStickNavBar';
import BannerText from '../../../Components/BannerText';
const Banner = () => {
    return (
        <div>
            <div className="bg-banner relative bg-repeat-y bg-top md:-[400px] lg:h-[500px] lg:mt-0">
                <div className='absolute z-[1] h-full w-full bg-gradient-to-t from-[#121A2B]' />
                <div className='relative z-[2]'>
                    <NonStickNavBar />
                    <BannerText />
                </div>
            </div>
            <img src={bannerImage} alt="" className='w-full mt-14 px-6' />
            <div className='my-9 text-center mx-4'>
                <Button 
                text={'Try it for free'} 
                extraClass={'w-full lg:w-auto'}/>
            </div>

        </div>
    );
};

export default Banner;