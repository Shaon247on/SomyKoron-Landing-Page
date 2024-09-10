
import { LinearGradient } from 'react-text-gradients'
import bannerImage from '../../../assets/Images/banner.png'
import Button from '../../../Components/Button';
const Banner = () => {
    return (
        <div>
            <div className="h-[100px]"></div>
            <div className="bg-banner bg-cover bg-center pt-16">

                <h1 className="text-[80px] text-center w-[1200px] text-[#d2d5da] font-lexend leading-tight font-semibold mx-auto">Unlock Global Knowledge with Our <br />
                    <LinearGradient gradient={['to right', '#1fd0b6 ,#0796aa']}>
                        Ai Translation Services
                    </LinearGradient>
                </h1>
                <p className='text-center text-xl mt-4'>Accuracy of translation is 90%+ on most languages. Professional dubbing and subtitle creation</p>
            </div>
            <img src={bannerImage} alt="" className='w-full mt-14 px-6' />
            <Button text={'Try it for free'}/>

        </div>
    );
};

export default Banner;