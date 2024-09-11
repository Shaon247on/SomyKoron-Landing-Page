import { PiUserCirclePlus } from 'react-icons/pi';
import { IoColorWandSharp } from 'react-icons/io5';
import { IoMdShare } from 'react-icons/io';
import { BsTools } from 'react-icons/bs';

const MediumSmallDevice = () => {
    return (
        <div className="mx-4 mt-9 block lg:hidden">
            <div className='mb-20'>
                <div className='flex items-center justify-between'>
                    <p className={`bg-[#2d9f89] py-4 rounded-full w-[55px] h-[55px] flex items-center justify-center`}>
                        <PiUserCirclePlus className='text-[30px] text-white' />
                    </p>
                    <p className='text-center text-[56px] font-semibold font-lexend text-[#2b3142] mr-2 md:mr-10'>1</p>
                </div>
                <div>
                    <h1 className='font-lexend mt-6 text-[24px] font-semibold text-white mb-3'>Create account</h1>
                    <p className='text-lg'>To create an account on Mazala.AI, the platform for unleashing your creativity and exploring the depths of imagination</p>
                </div>
            </div>
            <div className='mb-20'>
                <div className='flex items-center justify-between'>
                    <p className={`bg-[#ffb806] py-4 rounded-full w-[55px] h-[55px] flex items-center justify-center`}>
                        <BsTools className='text-[30px] text-white' />
                    </p>
                    <p className='text-center text-[56px] font-semibold font-lexend text-[#2b3142] mr-2 md:mr-10'>2</p>
                </div>
                <div>
                    <h1 className='font-lexend mt-6 text-[24px] font-semibold text-white mb-3'>Create account</h1>
                    <p className='text-lg'>To create an account on Mazala.AI, the platform for unleashing your creativity and exploring the depths of imagination</p>
                </div>
            </div>
            <div className='mb-20'>
                <div className='flex items-center justify-between'>
                    <p className={`bg-[#ff6f06] py-4 rounded-full w-[55px] h-[55px] flex items-center justify-center`}>
                        <IoColorWandSharp className='text-[30px] text-white' />
                    </p>
                    <p className='text-center text-[56px] font-semibold font-lexend text-[#2b3142] mr-2 md:mr-10'>3</p>
                </div>
                <div>
                    <h1 className='font-lexend mt-6 text-[24px] font-semibold text-white mb-3'>Create account</h1>
                    <p className='text-lg'>To create an account on Mazala.AI, the platform for unleashing your creativity and exploring the depths of imagination</p>
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between'>
                    <p className={`bg-[#59ca00] py-4 rounded-full w-[55px] h-[55px] flex items-center justify-center`}>
                        <IoMdShare className='text-[34px] text-white' />
                    </p>
                    <p className='text-center text-[56px] font-semibold font-lexend text-[#2b3142] mr-2 md:mr-10'>4</p>
                </div>
                <div>
                    <h1 className='font-lexend mt-6 text-[24px] font-semibold text-white mb-3'>Create account</h1>
                    <p className='text-lg'>To create an account on Mazala.AI, the platform for unleashing your creativity and exploring the depths of imagination</p>
                </div>
            </div>
        </div>
    );
};

export default MediumSmallDevice;