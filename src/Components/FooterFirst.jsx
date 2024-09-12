
import Logo from './Logo';

const FooterFirst = () => {
     
    return (
        <aside className='bg-gradient-to-r from-[#091c22] to-[#000614] pl-5 pt-10 lg:pt-24 h-full'>
            <Logo width='w-[320px] md:w-[320px]' height='h-[52px]' position=''/>
            <p className='lg:w-[384px] mr-4 mt-7 md:mr-0 text-base text-white'>
                We harness the power of artificial intelligence to break down language barriers, making worldwide information and educational content accessible to all Mongolians. Our suite of AI-powered tools is designed to empower Mongolian learners, researchers, and curious minds, opening doors to a world of knowledge previously hindered by language constraints.
            </p>
        </aside>
    );
};

export default FooterFirst;