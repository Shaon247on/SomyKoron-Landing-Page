import image1 from '../../../assets/Images/rec-1.jpg';
import image2 from '../../../assets/Images/rec-2.jpg';
import image3 from '../../../assets/Images/rec-3.jpg';
import image4 from '../../../assets/Images/rec-4.jpg';
import image5 from '../../../assets/Images/rec-5.jpg';
import image6 from '../../../assets/Images/rec-6.jpg';
import image7 from '../../../assets/Images/rec-7.jpg';
import image8 from '../../../assets/Images/rec-8.jpg';


const LargeDevice = () => {
    return (
        <div className="hidden lg:grid grid-cols-6 grid-rows-3 mx-4 h-[700px] mt-10">               
                {/* first list */}
                <img src={image1} alt="image1"  className="col-span-2 row-span-2 rounded-3xl"/>
                <img src={image3} alt="image3"  className="col-span-1 row-span-1 rounded-3xl ml-3"/>
                <img src={image4} alt="image4"  className="col-span-1 row-span-1 rounded-3xl ml-3"/>
                <img src={image6} alt="image6"  className="col-span-2 row-span-2 rounded-3xl ml-3"/>
                <img src={image5} alt="image5"  className="col-span-2 row-span-2 rounded-3xl ml-3"/>
                <img src={image2} alt="image2"  className="col-span-2 row-span-1 rounded-3xl"/>
                <img src={image7} alt="image7"  className="col-span-1 row-span-1 rounded-3xl ml-3"/>
                <img src={image8} alt="image8"  className="col-span-1 row-span-1 rounded-3xl ml-5"/>
            </div>
    );
};

export default LargeDevice;