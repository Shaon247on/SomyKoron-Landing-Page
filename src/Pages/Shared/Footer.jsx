
import FooterMid from '../../Components/FooterMid';
import FooterLast from '../../Components/FooterLast';
import FooterFirst from '../../Components/FooterFirst';
import FooterBottom from '../../Components/FooterBottom';

const Footer = () => {

    return (
        <>
            <footer className="flex flex-col lg:flex-row bg-[#000614] text-base-content mt-4 md:mt-16 pb-10 lg:pb-0 lg:h-[480px]">
                <FooterFirst />
                <FooterMid />
                <FooterLast />
            </footer>
            <footer className="flex flex-col-reverse lg:flex-row justify-between items-center bg-[#000613] text-neutral-content p-4 border-t-[1px] border-[#74787f]">
                <FooterBottom />
            </footer>
        </>
    );
};

export default Footer;