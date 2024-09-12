import './StyleShared.css';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SideMenu from '../../Components/SideMenu';
import Logo from '../../Components/Logo';
import NavList from './NavList';
import LanguageDropdown from '../../Components/LanguageDropdown';
import UserButton from '../../Components/UserButton';

AOS.init();

const NavForLargeDevice = () => {


    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-anchor="#navAnchor"
                className="nav_bar grid grid-cols-1 lg:grid-cols-12 justify-between items-center z-[5] w-full h-[80px] lg:h-[100px]">
                <div className="col-span-1 lg:col-span-2 flex-1 flex flex-row-reverse lg:flex-row justify-between items-center">
                    <SideMenu />
                    <Logo />
                </div>
                <div className="col-span-6 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <NavList />
                    </ul>
                </div>
                <div className="col-span-4  hidden lg:flex justify-around">
                    <LanguageDropdown position='' />
                    <UserButton />
                </div>
            </div>
            <div id="navAnchor" className="absolute right-0 bottom-[0%]"></div>
        </>
    );
};

export default NavForLargeDevice;