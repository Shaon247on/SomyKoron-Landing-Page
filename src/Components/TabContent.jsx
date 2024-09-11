import { BsStars } from "react-icons/bs";
import Button from "./Button";
const TabContent = ({title, subTitle, feature1, feature2, image}) => {
    return (
        <div className="flex flex-col-reverse lg:flex-row items-start justify-end gap-10 ml-4">
            <div className="lg:ml-44 text-start lg:w-[980px] ">
                <h1 className="text-[24px] lg:text-[40px] font-semibold text-white font-lexend w-[95%] leading-relaxed">{title}</h1>
                <p className="text-lg md:text-xl font-normal w-[300px] md:w-[95%] mt-5 mb-8">{subTitle}</p>
                <p className="flex gap-3 w-[300px] md:w-[80%] text-base md:text-lg text-white font-normal"><BsStars className="text-[#2d9f89] text-4xl mb-10"/> {feature1}</p>
                <p className="flex gap-3 w-[300px] md:w-[80%] text-base md:text-lg text-white font-normal"><BsStars className="text-[#2d9f89] text-4xl mb-20"/> {feature2}</p>
                <Button text={'Try it for free'} extraClass={'md:w-[240px]'}/>
            </div>
            <div className="w-[95%]">
                <img src={image} alt="" className=""/>
            </div>
        </div>
    );
};

export default TabContent;