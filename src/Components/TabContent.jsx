import { BsStars } from "react-icons/bs";
import Button from "./Button";
const TabContent = ({title, subTitle, feature1, feature2, image}) => {
    return (
        <div className="flex items-start justify-end gap-14">
            <div className="ml-52 text-start w-[700px]">
                <h1 className="text-[40px] font-semibold text-white font-lexend w-[85%] leading-relaxed">{title}</h1>
                <p className="text-xl font-normal w-[80%] mt-5 mb-8">{subTitle}</p>
                <p className="flex gap-3 w-[80%] text-lg text-white font-normal"><BsStars className="text-[#2d9f89] text-4xl mb-10"/> {feature1}</p>
                <p className="flex gap-3 w-[80%] text-lg text-white font-normal"><BsStars className="text-[#2d9f89] text-4xl mb-20"/> {feature2}</p>
                <Button text={'Try it for free'} />
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default TabContent;