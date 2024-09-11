import Title from "../../../Components/Title";
import ServiceCard from "./ServiceCard";

const Services = () => {
    return (
        <div>
            <Title title={'How to Use Services on mona-ai.mn'} subTitle={'MONA Ai services are designed to be user friendly and easy to use for users of all ages.'}/>

            <div className="grid grid-cols-4">
                <ServiceCard />
                
            </div>
        </div>
    );
};

export default Services;