import Logo from '../../assets/Images/footer-logo.png';
import brands from '../../assets/Images/card.png';
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";

const Footer = () => {
    return (
        <>
            <footer className="footer bg-[#000614] text-base-content h-[436px] mt-16">
                <aside className='bg-gradient-to-r from-[#091c22] to-[#000614] pl-5 pt-24 h-full'>
                    <img src={Logo} alt="" />
                    <p className='w-[384px] text-base text-white'>
                        We harness the power of artificial intelligence to break down language barriers, making worldwide information and educational content accessible to all Mongolians. Our suite of AI-powered tools is designed to empower Mongolian learners, researchers, and curious minds, opening doors to a world of knowledge previously hindered by language constraints.
                    </p>
                </aside>
                <nav className='pt-24'>
                    <h6 className="text-2xl font-semibold text-white">Quick Links</h6>
                    <a className="  text-[#80838a] text-lg font-medium">Home</a>
                    <a className="  text-[#80838a] text-lg font-medium">About Us</a>
                    <a className="  text-[#80838a] text-lg font-medium">Pricing</a>
                    <a className="  text-[#80838a] text-lg font-medium">FAQ</a>
                    <a className="  text-[#80838a] text-lg font-medium">Contact</a>
                    <a className="  text-[#80838a] text-lg font-medium">Terms and Policy</a>
                </nav>
                <nav className='pt-24'>
                    <h6 className="text-2xl font-semibold text-white">Tools</h6>
                    <a className="  text-[#80838a] text-lg font-medium">AI Video Subtitles</a>
                    <a className="  text-[#80838a] text-lg font-medium">YouTube Translation</a>
                    <a className="  text-[#80838a] text-lg font-medium">YouTube Watch</a>
                    <a className="  text-[#80838a] text-lg font-medium">Image Generation</a>
                    <a className="  text-[#80838a] text-lg font-medium">AI Assistant</a>
                </nav>
                <nav className='pt-24'>
                    <h6 className="text-2xl font-semibold text-white">Get in touch</h6>
                    <a className="  flex items-center text-[#80838a] text-lg font-medium gap-4"><FaMapMarkerAlt className='text-2xl' /> Times Square Office Building</a>
                    <a className="  flex items-center text-[#80838a] text-lg font-medium gap-4"><HiMail className='text-2xl' />info@mona-ai.mn
                    </a>
                    <a className="  flex items-center text-[#80838a] text-lg font-medium gap-4"><IoCall className='text-2xl' />+976</a>
                </nav>
            </footer>
            <footer className="footer bg-[#000613] text-neutral-content items-center p-4 border-t-[1px] border-[#74787f]">
                <aside className="grid-flow-col items-center text-xl text-[#95989d]">                    
                    <p>Copyright © 2024 MAZAL.AI . All rights reserved.</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <img src={brands} alt="" />
                </nav>
            </footer>
        </>
    );
};

export default Footer;