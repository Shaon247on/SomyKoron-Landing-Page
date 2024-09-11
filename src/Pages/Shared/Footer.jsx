import Logo from '../../assets/Images/footer-logo.png';
import brands from '../../assets/Images/card.png'
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col lg:flex-row bg-[#000614] text-base-content mt-4 md:mt-16 pb-10 lg:pb-0 lg:h-[480px]">
                <aside className='bg-gradient-to-r from-[#091c22] to-[#000614] pl-5 pt-10 lg:pt-24 h-full'>
                    <img src={Logo} alt="" className='w-[320px] md:w-auto' />
                    <p className='lg:w-[384px] mr-4 mt-7 md:mr-0 text-base text-white'>
                        We harness the power of artificial intelligence to break down language barriers, making worldwide information and educational content accessible to all Mongolians. Our suite of AI-powered tools is designed to empower Mongolian learners, researchers, and curious minds, opening doors to a world of knowledge previously hindered by language constraints.
                    </p>
                </aside>
                <div className='flex gap-12 items-start justify-start lg:justify-between flex-1 md:ml-7 pt-16 md:pt-0'>
                    <nav className='md:pt-24 ml-4 md:ml-0'>
                        <h6 className="text-xl mb-10 font-medium text-white footer-title">Quick Links</h6>
                        <ul className='space-y-5'>
                            <li><a className="cursor-pointer  text-[#80838a] text-lg font-medium">Home</a></li>
                            <li><a className="cursor-pointer  text-[#80838a] text-lg font-medium">About Us</a></li>
                            <li><a className="cursor-pointer  text-[#80838a] text-lg font-medium">Pricing</a></li>
                            <li><a className="cursor-pointer  text-[#80838a] text-lg font-medium">FAQ</a></li>
                            <li><a className="cursor-pointer  text-[#80838a] text-lg font-medium">Contact</a></li>
                            <li><a className="cursor-pointer  text-[#80838a] text-lg font-medium">Terms and Policy</a></li>
                        </ul>
                    </nav>
                    <nav className='md:pt-24 md:ml-40 lg:ml-0'>
                        <h6 className="text-xl mb-10 font-medium text-white footer-title">Tools</h6>
                        <ul className='space-y-5'>
                            <li><a className="cursor-pointer text-[#80838a] text-lg font-medium">AI Video Subtitles</a></li>
                            <li><a className="cursor-pointer text-[#80838a] text-lg font-medium">YouTube Translation</a></li>
                            <li><a className="cursor-pointer text-[#80838a] text-lg font-medium">YouTube Watch</a></li>
                            <li><a className="cursor-pointer text-[#80838a] text-lg font-medium">Image Generation</a></li>
                            <li><a className="cursor-pointer text-[#80838a] text-lg font-medium">AI Assistant</a></li>
                        </ul>
                    </nav>
                </div>
                <nav className='md:pt-24 md:ml-0 md:w-[470px] pl-4 md:pl-7 lg:l-32 pt-16 lg:pt-0'>
                    <h6 className="text-xl mb-10 font-medium text-white ">Get in touch</h6>
                    <ul className='space-y-5'>
                        <li><a className="cursor-pointer  flex items-center text-[#80838a] text-lg font-medium gap-4"><FaMapMarkerAlt className='text-2xl' /> Times Square Office Building</a></li>
                        <li><a className="cursor-pointer  flex items-center text-[#80838a] text-lg font-medium gap-4"><HiMail className='text-2xl' />info@mona-ai.mn</a></li>
                        <li><a className="cursor-pointer  flex items-center text-[#80838a] text-lg font-medium gap-4"><IoCall className='text-2xl' />+976</a></li>
                    </ul>
                </nav>
            </footer>
            <footer className="flex flex-col-reverse lg:flex-row justify-between items-center bg-[#000613] text-neutral-content p-4 border-t-[1px] border-[#74787f]">
                <aside className="grid-flow-col items-center text-xl text-[#95989d] mt-3 lg:mt-0">
                    <p>Copyright © 2024 MAZAL.AI . All rights reserved.</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <img src={brands} alt="" className='w-[500px] lg:w-auto'/>
                </nav>
            </footer>
        </>
    );
};

export default Footer;