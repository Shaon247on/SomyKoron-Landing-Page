import AITools from "../AITools/AITools";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import YouTube from "../YouTube/YouTube";

const HomePageLayout = () => {
    return (
        <div>
            <Banner/>  
            <AITools/>
            <Services/>   
            <YouTube/>       
        </div>
    );
};

export default HomePageLayout;