import { LinearGradient } from "react-text-gradients";


const BannerText = () => {
    return (
        <div className='mt-14'>
            <h1 className="text-[32px] lg:text-[80px] text-center lg:w-[1200px] text-[#d2d5da] font-lexend leading-tight font-semibold mx-auto">Unlock Global Knowledge with Our <br />
                <LinearGradient gradient={['to right', '#1fd0b6 ,#0796aa']} className='lg:text-[82px]'>
                    Ai Translation Services
                </LinearGradient>
            </h1>
            <p className='text-center text-base lg:text-xl mt-4 px-10 lg:px-0'>Accuracy of translation is 90%+ on most languages. Professional dubbing and subtitle creation</p>
        </div>
    );
};

export default BannerText;