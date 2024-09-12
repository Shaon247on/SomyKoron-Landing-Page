import { FaMapMarkerAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";

const FooterLast = () => {
    return (
        <nav className='md:pt-24 md:ml-0 md:w-[470px] pl-4 md:pl-7 lg:pl-32 pt-16 lg:pt-24'>
            <h6 className="text-xl mb-10 font-medium text-white ">Get in touch</h6>
            <ul className='space-y-5'>
                <li><a className="cursor-pointer  flex items-center text-[#80838a] text-lg font-medium gap-4"><FaMapMarkerAlt className='text-2xl' /> Times Square Office Building</a></li>
                <li><a className="cursor-pointer  flex items-center text-[#80838a] text-lg font-medium gap-4"><HiMail className='text-2xl' />info@mona-ai.mn</a></li>
                <li><a className="cursor-pointer  flex items-center text-[#80838a] text-lg font-medium gap-4"><IoCall className='text-2xl' />+976</a></li>
            </ul>
        </nav>
    );
};

export default FooterLast;