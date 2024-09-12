import { Link } from "react-router-dom";


const NavList = () => {
    return (
        <>
            <Link to='/'><li className="text-xl ml-10 font-medium hover:text-white">Home</li></Link>
            <li>
                <details >
                    <summary className="text-xl ml-4 font-medium hover:text-white -mt-2">AI Services</summary>
                    <ul className="bg-[#121a2b] rounded-none p-8">
                        <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer">Youtube Translation</li>
                        <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer">Youtube Watch</li>
                        <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer">A.I Research Assistant</li>
                        <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer mb-3">Image Generation</li>
                    </ul>
                </details>
            </li>
            <Link><li className="text-xl ml-5 font-medium hover:text-white">About Us</li></Link>
            <Link><li className="text-xl ml-8 font-medium hover:text-white">Pricing</li></Link>
            <Link><li className="text-xl ml-8 font-medium hover:text-white">FAQ</li></Link>
            <Link><li className="text-xl ml-8 font-medium hover:text-white">Contact Us</li></Link>
        </>
    );
};

export default NavList;