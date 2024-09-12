import './StyleShared.css';
import 'animate.css';

import Logo from "../../Components/Logo";
import SideMenu from "../../Components/SideMenu";
import NavList from "./NavList";
import LanguageDropdown from "../../Components/LanguageDropdown";
import UserButton from "../../Components/UserButton";

const NonStickNavBar = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-between items-center w-full h-[80px] lg:h-[100px] bg-transparent">
                <div className="col-span-1 lg:col-span-2 flex-1 flex flex-row-reverse lg:flex-row justify-between items-center">                    
                    <SideMenu/>
                    <Logo/>
                </div>
                <div className="col-span-6 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavList/>
                    </ul>
                </div>
                <div className="col-span-4  hidden lg:flex justify-around">
                    <LanguageDropdown position=""/>
                    <UserButton />
                </div>
            </div>
    );
};

export default NonStickNavBar;