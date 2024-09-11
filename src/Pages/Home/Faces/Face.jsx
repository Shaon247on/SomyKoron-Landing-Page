import Title from "../../../Components/Title";
import LargeDevice from "./LargeDevice";
import MediumSmallDevice from "./MediumSmallDevice";



const Face = () => {
    return (
        <div className="mt-32">
            <Title 
            title={'Uniquely Mongolian: AI-Generated Faces'}
            subTitle={'Experience the power of AI tailored specifically for Mongolia with our innovative image generation model. Trained on thousands of Mongolian faces, this tool creates stunningly realistic and diverse portraits that truly represent the unique features of our people.'}
            />
            <LargeDevice/>
            <MediumSmallDevice/>
        </div>
    );
};

export default Face;