import { Link } from "react-router-dom";
import './StyleShared.css';
import 'animate.css';
import { RiMenu5Line } from "react-icons/ri";
import logo from "../../assets/Images/footer-logo.png"
import { SiGoogletranslate } from "react-icons/si";
import { useState } from "react";

const NonStickNavBar = () => {
    const [toggle, setToggle] = useState(false)
    console.log(toggle);
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
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 justify-between items-center w-[770px] lg:w-full h-[80px] lg:h-[100px] bg-transparent">
                <div className="col-span-1 lg:col-span-2 flex-1 flex flex-row-reverse lg:flex-row justify-between items-center">                    
                    <button onClick={() => setToggle(true)} className="mr-4 text-2xl block lg:hidden"><RiMenu5Line /></button>
                    <div className={` absolute top-[0px] w-full animate__animated my-element bg-[#121a2b] ${toggle ? 'animate__slideInLeft' : "animate__slideOutLeft"} overflow-y-scroll pb-8 h-[100vh]`} >
                        <div className="flex justify-between items-start">
                            <div>
                                <div className="p-5">
                                    <img src={logo} alt="Logo" className="w-[205px] h-[39px]" />
                                </div>
                                <ul className="space-y-5 mt-10">
                                    <li className="text-xl ml-10 font-medium hover:text-white">Home</li>
                                    <li>
                                        <details >
                                            <summary className="text-xl ml-4 font-medium hover:text-white -mt-2">AI Services</summary>
                                            <ul className="bg-[#1a253d] rounded-none pt-4 pl-4 ml-8 absolute">
                                                <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer">Youtube Translation</li>
                                                <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer">Youtube Watch</li>
                                                <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer">A.I Research Assistant</li>
                                                <li className="text-xl mt-4 mr-4 hover:text-white cursor-pointer mb-3">Image Generation</li>
                                            </ul>
                                        </details>
                                    </li>
                                    <li className="text-xl ml-8 font-medium hover:text-white">About Us</li>
                                    <li className="text-xl ml-8 font-medium hover:text-white">Pricing</li>
                                    <li className="text-xl ml-8 font-medium hover:text-white">FAQ</li>
                                    <li className="text-xl ml-8 font-medium hover:text-white">Contact Us</li>
                                </ul>
                                <div className="flex items-center ml-8 mt-8">
                                    <SiGoogletranslate className="text-xl" />
                                    <select id="dropdown" className="block cursor-pointer bg-transparent px-4 py-2 rounded-md outline-none text-xl" name="options">
                                        <option value="English" className="bg-[#121a2b] text-[#a1a3ab] text-xl">English</option>
                                        <option value="Монгол" className="bg-[#121a2b] text-[#a1a3ab] text-xl">Монгол</option>
                                    </select>
                                </div>
                            </div>
                            <button onClick={() => setToggle(false)} className="text-white text-lg pt-8 pr-6">X</button>
                        </div>
                        <div className="flex gap-7 flex-col w-full mt-3 mx-2 md:mx-5">
                            <button className="text-xl w-[95%]">Login</button>
                            <button className="px-6 py-3 w-[95%] border-2 border-[#2d9f89] text-[#2d9f89] rounded-md text-xl">Sign Up</button>
                        </div>
                    </div>
                    <div className="pl-5 lg:pl-14">
                        <img src={logo} alt="Logo" className="w-[200px] h-[35px]" />
                    </div>
                </div>
                <div className="col-span-6 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="col-span-4  hidden lg:flex justify-around">
                    <div className="flex items-center ">
                        <SiGoogletranslate className="text-xl" />
                        <select id="dropdown" className="block cursor-pointer bg-transparent px-4 py-2 rounded-md outline-none text-xl" name="options">
                            <option value="English" className="bg-[#121a2b] text-[#a1a3ab] text-xl">English</option>
                            <option value="Монгол" className="bg-[#121a2b] text-[#a1a3ab] text-xl">Монгол</option>
                        </select>
                    </div>
                    <button className="text-xl">Login</button>
                    <button className="px-6 py-3 border-2 border-[#2d9f89] text-[#2d9f89] rounded-md text-xl">Sign Up</button>
                </div>
            </div>
    );
};

export default NonStickNavBar;