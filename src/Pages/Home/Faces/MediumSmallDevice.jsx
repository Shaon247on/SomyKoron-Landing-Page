import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import './Style.css'

import { Pagination, FreeMode, Navigation, Autoplay } from 'swiper/modules';

import image1 from '../../../assets/Images/rec-1.jpg';
import image2 from '../../../assets/Images/rec-2.jpg';
import image3 from '../../../assets/Images/rec-3.jpg';
import image4 from '../../../assets/Images/rec-4.jpg';
import image5 from '../../../assets/Images/rec-5.jpg';
import image6 from '../../../assets/Images/rec-6.jpg';
import image7 from '../../../assets/Images/rec-7.jpg';
import image8 from '../../../assets/Images/rec-8.jpg';

const MediumSmallDevice = () => {

    return (
        <div className='mt-10 block lg:hidden'>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    }
                }}
                freeMode={true}

                slidesPerView={3}
                spaceBetween={30}
                pagination={{                    
                    clickable: true,
                }}
                                
                modules={[Pagination, FreeMode, Autoplay]}
                loop={true}  
                autoplay={{delay:1000}}              
                className="max-w-[90%] lg:max-w-[95%] h-[580px] z-[1]"
            >
                <SwiperSlide className='px-3'>
                    <div className='grid grid-rows-3 gap-6 group items-center justify-center'>
                        <img src={image1} alt="image1" className='row-span-2 rounded-[20px]' />
                        <img src={image2} alt="image2" className='row-span-1 rounded-[20px]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-3'>
                    <div className='grid grid-cols-2 grid-rows-3  gap-6 group'>
                        <img src={image3} alt="image3" className=' col-span-1 row-span-1 rounded-[20px]' />
                        <img src={image4} alt="image4" className=' col-span-1 row-span-1 rounded-[20px]' />
                        <img src={image5} alt="image5" className=' col-span-2 row-span-2 rounded-[20px]' />
                    </div>
                </SwiperSlide>
                <SwiperSlide className='px-3'>
                    <div className='grid grid-cols-2 grid-rows-3  gap-6 group '>
                        <img src={image6} alt="image6" className=' col-span-2 row-span-2 rounded-[20px]' />                       
                        <img src={image7} alt="image7" className=' col-span-1 row-span-1 rounded-[20px]' />
                        <img src={image8} alt="image8" className=' col-span-1 row-span-1 rounded-[20px]' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MediumSmallDevice;