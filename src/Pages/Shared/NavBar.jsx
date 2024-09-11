import { Link } from "react-router-dom";
import './StyleShared.css';
import { RiMenu5Line } from "react-icons/ri";
import logo from "../../assets/Images/footer-logo.png"
import { SiGoogletranslate } from "react-icons/si";

const NavBar = () => {
    const navLinks =
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
    return (
        <>
            <div className="nav_bar grid grid-cols-12 justify-between items-center z-[2]">
                <div className="col-span-6 lg:col-span-2 flex-1 lg:flex">
                    <div className="dropdown">
                        <div className="drawer lg:hidden">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="drawer-button"><RiMenu5Line className="text-2xl font-semibold" /></label>
                            </div>
                            <div className="drawer-side">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 text-base-content min-h-full w-full p-4">
                                    {/* Sidebar content here */}
                                    <li><a>Sidebar Item 1</a></li>
                                    <li><a>Sidebar Item 2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pl-14">
                        <img src={logo} alt="Logo" className="w-[170px] h-[32px]" />
                    </div>
                </div>
                <div className="col-span-6 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="col-span-4  hidden lg:flex justify-around">                   
                    <div className="flex items-center ">
                        <SiGoogletranslate className="text-xl"/>
                        <select id="dropdown" className="block cursor-pointer bg-transparent px-4 py-2 rounded-md outline-none text-xl" name="options">
                            <option value="English" className="bg-[#121a2b] text-[#a1a3ab] text-xl">English</option>
                            <option value="Монгол" className="bg-[#121a2b] text-[#a1a3ab] text-xl">Монгол</option>
                        </select>                      
                    </div>
                    <button className="text-xl">Login</button>
                    <button className="px-6 py-3 border-2 border-[#2d9f89] text-[#2d9f89] rounded-md text-xl">Sign Up</button>
                </div>
            </div>
        </>
    );
};

export default NavBar;