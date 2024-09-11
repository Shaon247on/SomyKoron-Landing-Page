import Title from "../../../Components/Title";
import LargeDevice from "./LargeDevice";
import MediumSmallDevice from "./MediumSmallDevice";

const Services = () => {
    return (
        <div className="mt-32">
            <Title 
            title={'How to Use Services on mona-ai.mn'} 
            subTitle={'MONA Ai services are designed to be user friendly and easy to use for users of all ages.'}
            />

            <LargeDevice/>
            <MediumSmallDevice/>
        </div>
    );
};

export default Services;