import Button from "../../../Components/Button";
import Title from "../../../Components/Title";
import image1 from '../../../assets/Images/youtube-service-right.png';
import image2 from '../../../assets/Images/youtube-service-left.png';

const YouTube = () => {
    return (
        <div className="mt-20">
            <Title title={'YouTube Translation: Two Tiers to Suit Your Needs'} />
            <div className=" mx-4 lg:mx-10 mt-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center justify-between mb-16">
                    <div className="w-[95%] lg:w-[630px] col-span-1 lg:col-span-7">
                        <h1 className="text-[26px] lg:text-[40px] text-white font-semibold mb-3">Best Translation</h1>
                        <p className="text-base lg:text-xl mb-6 font-medium">Experience top-tier YouTube translation with our Best Translation service. Utilizing advanced AI algorithms, this option delivers highly accurate subtitles and dubbing in Mongolian. Ideal for professional use, academic content, or when precision is paramount.</p>
                        <Button text={'Try Now'} extraClass={'w-full lg:w-auto'}/>
                    </div>
                    <div className="col-span-1 lg:col-span-5">
                        <img src={image1} alt="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-flow-col gap-8 lg:gap-32 items-center justify-between">
                    <div className="order-2 lg:order-1 col-span-1 lg:col-span-5">
                        <img src={image2} alt="" />
                    </div>
                    <div className="order-1 lg:order-2 w-[95%] lg:w-[640px] col-span-1 lg:col-span-7 text-start">
                        <h1 className="text-[26px] lg:text-[40px] text-white font-semibold mb-3">Standard Translation</h1>
                        <p className="text-base lg:text-xl mb-6 font-medium">Our Standard Translation service offers a cost-effective way to enjoy YouTube videos in Mongolian. While it may occasionally have minor inaccuracies, it provides a good overall understanding of the content. Perfect for casual viewing and when quick, budget-friendly translation is needed.</p>
                        <Button text={'Try Now'} extraClass={'w-full lg:w-auto'}/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default YouTube;