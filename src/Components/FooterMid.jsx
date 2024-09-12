
const FooterMid = () => {
    return (
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
    );
};

export default FooterMid;