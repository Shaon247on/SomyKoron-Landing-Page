import AITools from "../AITools/AITools";
import Banner from "../Banner/Banner";
import Face from "../Faces/Face";
import Services from "../Services/Services";
import YouTube from "../YouTube/YouTube";

const HomePageLayout = () => {
    return (
        <div>
            <Banner/>  
            <AITools/>
            <Services/>   
            <YouTube/> 
            <Face/>      
        </div>
    );
};

export default HomePageLayout;