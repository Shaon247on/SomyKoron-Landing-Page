
import { LinearGradient } from 'react-text-gradients'
import bannerImage from '../../../assets/Images/banner.png'
import Button from '../../../Components/Button';
import NonStickNavBar from '../../Shared/NonStickNavBar';
const Banner = () => {
    return (
        <div>
            <div className="bg-banner bg-repeat-y bg-top pt-32 lg:pt-0 lg:h-[500px] lg:mt-0">
                <div className='absolute z-[1] h-full w-full bg-gradient-to-t from-[#121A2B]' />
                <div className='relative z-[2]'>
                    <NonStickNavBar />
                    <h1 className="text-[32px] lg:text-[80px] text-center lg:w-[1200px] text-[#d2d5da] font-lexend leading-tight font-semibold mx-auto">Unlock Global Knowledge with Our <br />
                        <LinearGradient gradient={['to right', '#1fd0b6 ,#0796aa']} className='text-[42px]'>
                            Ai Translation Services
                        </LinearGradient>
                    </h1>
                    <p className='text-center text-base lg:text-xl mt-4 px-10 lg:px-0'>Accuracy of translation is 90%+ on most languages. Professional dubbing and subtitle creation</p>
                </div>
            </div>
            <img src={bannerImage} alt="" className='w-full mt-14 px-6' />
            <div className='my-9 text-center'>
                <Button text={'Try it for free'} />
            </div>

        </div>
    );
};

export default Banner;