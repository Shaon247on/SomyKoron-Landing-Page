import Title from "../../../Components/Title";
import ServiceCard from "./ServiceCard";
import { PiUserCirclePlus } from "react-icons/pi";
import { BsTools } from "react-icons/bs";
import { IoColorWandSharp } from "react-icons/io5";
import { IoMdShare } from "react-icons/io";

const Services = () => {
    return (
        <div>
            <Title 
            title={'How to Use Services on mona-ai.mn'} 
            subTitle={'MONA Ai services are designed to be user friendly and easy to use for users of all ages.'}
            />

            <div className="grid grid-cols-4 h-[800px]">

                {/* card 1 */}

                <ServiceCard 
                title={'Create account'} 
                subtitle={'To create an account on Mazala.AI, the platform for unleashing your creativity and exploring the depths of imagination'}
                number={1}  
                icon={<PiUserCirclePlus className="text-[34px] text-white"/>}
                iconBGColor={'bg-[#2d9f89]'} 
                border={true}                          
                />
                
                {/* card 2 */}

                <ServiceCard 
                title={'Select Your AI tool'} 
                subtitle={'Discover the perfect AI-powered tool tailored to your specific requirements'}
                number={2}  
                icon={<BsTools className="text-[34px] text-white"/>}
                iconBGColor={'bg-[#ffb806]'}
                position={'top-[100px] -left-[15px]'} 
                border={true}                      
                />

                {/* card 3 */}

                <ServiceCard 
                title={'Enjoy the result'} 
                subtitle={"From enjoying any video in your native tongue to leveraging our powerful AI research assistant, you can be confident in the quality and effectiveness of our services. We're committed to delivering results that exceed your expectations, regardless of which tool you choose to use."}
                number={3}  
                icon={<IoColorWandSharp className="text-[34px] text-white"/>}
                iconBGColor={'bg-[#ff6f06]'}
                position={'top-[198px] -left-[30px]'}
                border={true}                       
                />

                {/* card 4 */}

                <ServiceCard 
                title={'Spread the AI Revolution'} 
                subtitle={'Enjoyed our services? Share the power of AI with your network! Help us grow by recommending MONA AI to your friends, family, and colleagues. Your support helps us continue innovating and improving our AI tools for everyone.'}
                lastNumber={4}  
                icon={<IoMdShare className="text-[34px] text-white"/>}
                iconBGColor={'bg-[#59ca00]'}
                position={'top-[296px] -left-[43px]'}                       
                />
                
            </div>
        </div>
    );
};

export default Services;